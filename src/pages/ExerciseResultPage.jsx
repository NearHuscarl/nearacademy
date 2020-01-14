import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnswerCard from '../components/AnswerCard';
import Card from '../components/Card';
import QuestionGrid from '../components/QuestionGrid';
import CommentSection from '../components/CommentSection';
import Ads from '../components/Ads';
import ExerciseCarousel from '../components/ExerciseCarousel';
import { Line, SizedBox } from '../components/Common';
import { H2, H3, H4 } from '../components/Headings';
import { WhiteButton } from '../components/Buttons';
import { exerciseProps } from '../utilities/proptypes';
import ContentContainer from '../layout/ContentContainer';
import styled, { appColors, theme } from '../styles';
import congratsImg from '../../public/images/congrats.jpg';
import { getExercise } from '../store/storeHelper';

const AnswerText = styled.span`
	font-weight: 600;
	color: ${(props) => {
		if (props.answer !== 'Not answered') {
			if (props.answer === 'Correct') {
				return appColors.green;
			}
			return appColors.red;
		}
		return 'inherit';
	}};
`;
const Container = styled(Card)`
	width: 14rem;
`;

function QuestionCard({ answer }) {
	const noAnswer = answer.userAnswer === -1;
	const trueAnswer = answer.userAnswer === answer.answer;
	let text = 'Not answered';
	if (!noAnswer) {
		if (trueAnswer) {
			text = 'Correct';
		} else {
			text = 'Incorrect';
		}
	}
	return (
		<Container>
			<H4 className='mb-0'>Question 01</H4>
			<AnswerText className='mb-sm' answer={text}>
				{text}
			</AnswerText>
			<WhiteButton type='button'>Lưu lại</WhiteButton>
		</Container>
	);
}

const ResultSummary = styled.div`
	padding-top: 1.5rem;
`;
const SummaryDescription = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	background-blend-mode: darken;
	background-image: url(${congratsImg});
	background-size: cover;
	background-position: center;
	color: ${appColors.white};

	height: 20rem;
	border-radius: ${theme.borderRound};

	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const SummaryScore = styled.div`
	font-size: 3.6rem;
	font-weight: 600;
	line-height: 1;
`;
const SummaryExp = styled.div`
	margin: 1.6rem 0;
	font-weight: 600;
	font-size: 1.5rem;
`;
const SummaryRank = styled.div`
	text-align: center;
	width: 23rem;
`;

const gutter = '1.4rem';
const Detail = styled.div`
	padding-top: 1.5rem;
`;
const DetailContent = styled.div`
	& > :not(:last-child) {
		margin-right: ${gutter};
	}
	display: flex;
`;
const DetailCol = styled.div`
	display: flex;
	flex-direction: column;

	& > :not(:last-child) {
		margin-bottom: ${gutter};
	}
`;
const DetailCol1 = styled(DetailCol)`
`;
const DetailCol2 = styled(DetailCol)`
	width: 100%;
`;
const DetailCol3 = styled(DetailCol)`
	width: 21rem;
`;

const ExerciseResultPage = ({
	exercise,
	nationalExams,
	selectedQuestion,
	timeTaken,
	score,
}) => {
	const { id, title, questionCount, difficulty, questions } = exercise;

	return (
		<ContentContainer as='main'>
			<H2 className='mt-md'>
				{title}
				<H2
					sub
					className='mt-tn'
				>{`${questionCount} questions - ${difficulty}`}</H2>
			</H2>
			<Line />
			<ResultSummary>
				<H2 className='mb-sm'>Result summary</H2>
				<SummaryDescription>
					<SummaryScore>{`${score}/${questions.length}`}</SummaryScore>
					<div>{`${timeTaken.minutes} mins ${timeTaken.seconds} secs`}</div>
					<SummaryExp>+600 exp</SummaryExp>
					<SummaryRank>
						Rank 120 out of 360 students participating
					</SummaryRank>
				</SummaryDescription>
			</ResultSummary>
			<Detail>
				<H2 className='mb-sm'>Answer</H2>
				<DetailContent>
					<DetailCol1>
						<QuestionCard answer={questions[selectedQuestion]} />
					</DetailCol1>
					<DetailCol2>
						<AnswerCard answer={questions[selectedQuestion]} />
						<Card>
							<H3>Detail answer</H3>
							<div>
								{questions[selectedQuestion].answerDetail
									.split('\n')
									.map((s) => (
										<p key={s}>{s}</p>
									))}
							</div>
						</Card>
						<CommentSection />
					</DetailCol2>
					<DetailCol3>
						<QuestionGrid
							questionCount={questions.length}
							exerciseId={id}
						/>
						<Ads />
					</DetailCol3>
				</DetailContent>
			</Detail>
			<SizedBox height={2.5} />
			<ExerciseCarousel list={nationalExams} title='Related exercises' />
			<ExerciseCarousel list={nationalExams} title='Trending exercises' />
			<ExerciseCarousel list={nationalExams} title='Newest exercises' />
			<SizedBox height={7} />
		</ContentContainer>
	);
};

ExerciseResultPage.propTypes = {
	selectedQuestion: PropTypes.number.isRequired,
	exercise: exerciseProps.isRequired,
	nationalExams: PropTypes.arrayOf(exerciseProps).isRequired,
	timeTaken: PropTypes.shape({
		minutes: PropTypes.number,
		seconds: PropTypes.number,
	}).isRequired,
	score: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
	selectedQuestion: state.exerciseResult.selectedQuestion,
	exercise: getExercise(state, props.match.params.id),
	nationalExams: Object.values(state.exercises.examGeography),
	timeTaken: state.exerciseResult.timeTaken,
	score: state.exerciseResult.score,
});

export default connect(mapStateToProps, null)(ExerciseResultPage);
