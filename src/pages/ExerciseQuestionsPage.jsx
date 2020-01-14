import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import QuestionCard from '../components/QuestionCard';
import QuestionFlagCard from '../components/QuestionFlagCard';
import QuestionProgress from '../components/QuestionProgress';
import { SizedBox, Line } from '../components/Common';
import { H2 } from '../components/Headings';
import { exerciseProps } from '../utilities/proptypes';
import { setExerciseQuestions } from '../actions/exerciseQuestions';
import ContentContainer from '../layout/ContentContainer';
import styled from '../styles';
import { getExercise } from '../store/storeHelper';

const Content = styled.div`
	display: flex;
	margin-top: 2.5rem;
	margin-bottom: 4rem;
`;
const ColumnLeft = styled.section`
	margin-right: 1.6rem;

	display: grid;
	grid-template-columns: max-content minmax(min-content, 51rem);
	column-gap: 1.4rem;
	row-gap: 1.7rem;

	/* select Flag Card */
	& > :nth-child(2n + 1) {
		align-self: flex-start;
	}
`;
const ColumnRight = styled.div`
	& > :not(:last-child) {
		margin-bottom: 1.6rem;
	}
`;

// eslint-disable-next-line no-shadow
function ExerciseQuestionsPage({ exercise, setExerciseQuestions, questions }) {
	const { id, title, questionCount, difficulty } = exercise;

	React.useEffect(() => {
		setExerciseQuestions(exercise.questions);
	}, []);

	return (
		<ContentContainer as='main'>
			<H2 className='mt-md'>
				{title}
				<H2
					as='div'
					sub
					className='mt-tn'
				>{`${questionCount} questions - ${difficulty}`}</H2>
			</H2>
			<Line />
			<Content>
				<ColumnLeft>
					{exercise.questions.slice(0, 10).map((q, index) => (
						<React.Fragment key={q.id}>
							<QuestionFlagCard
								id={q.id}
								index={index}
								flag={get(questions[q.id], 'flag', false)}
								answer={get(questions[q.id], 'answer', -1)}
							/>
							<QuestionCard
								id={q.id}
								question={q.question}
								answer={get(questions[q.id], 'answer', -1)}
								answers={q.answers.map((a) => a.text)}
							/>
						</React.Fragment>
					))}
				</ColumnLeft>
				<ColumnRight>
					<QuestionProgress
						exerciseId={id}
						questions={questions}
						resetExercise={() => setExerciseQuestions(exercise.questions)}
					/>
					<Ads />
				</ColumnRight>
			</Content>
			<Pagination />
			<SizedBox height={7} />
		</ContentContainer>
	);
}

ExerciseQuestionsPage.propTypes = {
	exercise: exerciseProps.isRequired,
	questions: PropTypes.objectOf(
		PropTypes.shape({
			flag: PropTypes.bool,
			answer: PropTypes.number,
		}),
	).isRequired,
	setExerciseQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
	exercise: getExercise(state, props.match.params.id),
	questions: state.exerciseQuestions.questions,
});

const mapDispatchToProps = (dispatch) => ({
	setExerciseQuestions: (questions) => dispatch(setExerciseQuestions(questions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseQuestionsPage);
