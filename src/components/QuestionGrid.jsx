import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import range from 'lodash/range';
import { setExerciseResultQuestion } from '../actions/exerciseResult';
import Card from './Card';
import Button, { WhiteButton } from './Buttons';
import styled, { helperStyles } from '../styles';
import routes from '../routes';

const Container = styled(Card)`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, 3rem);
	// grid-template-rows: repeat(auto-fit, 3rem) min-content;
	gap: 0.4rem;

	padding: 2rem;
`;
const QButton = styled(WhiteButton)`
	width: 3rem;
	height: 3rem;
	padding: 0;
	font-size: 1.3rem;
`;
const SubmitButton = styled(Button)`
	padding: 0.7rem 1.5rem;
	margin-top: 1rem;
	grid-column: 1 / -1;
	${helperStyles.bold}
`;

function QuestionGrid({
	questionCount,
	exerciseId,
	// eslint-disable-next-line no-shadow
	setExerciseResultQuestion,
}) {
	const history = useHistory();
	const exercisePath = `${routes.exercise.path}/${exerciseId}/questions`;
	return (
		<Container>
			{range(0, questionCount).map((i) => {
				return (
					<QButton
						key={i}
						type='button'
						onClick={() => setExerciseResultQuestion(i)}
					>
						{i + 1}
					</QButton>
				);
			})}
			<SubmitButton type='button' onClick={() => history.push(exercisePath)}>
				Try again
			</SubmitButton>
		</Container>
	);
}

QuestionGrid.propTypes = {
	questionCount: PropTypes.number.isRequired,
	exerciseId: PropTypes.string.isRequired,
	setExerciseResultQuestion: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setExerciseResultQuestion: (question) =>
		dispatch(setExerciseResultQuestion(question)),
});

export default connect(null, mapDispatchToProps)(QuestionGrid);
