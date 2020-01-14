import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Radio, { RadioGroup } from './Radio';
import Card from './Card';
import { H4 } from './Headings';
import { setExerciseQuestionAnswer } from '../actions/exerciseQuestions';
import styled, { appColors } from '../styles';

const OptionText = styled.div`
	color: ${appColors.greyDark1};
	margin-top: 1rem;
	margin-bottom: 0.7rem;

	font-size: inherit;
	font-family: inherit;
	font-weight: inherit;
	line-height: inherit;
	letter-spacing: inherit;
`;

function QuestionCard({
	id,
	question,
	answers,
	answer,
	// eslint-disable-next-line no-shadow
	setExerciseQuestionAnswer,
}) {
	const handleChange = (event) => {
		const val = parseInt(event.target.value, 10);
		setExerciseQuestionAnswer(id, val);
	};

	return (
		<Card>
			<H4>{question}</H4>
			<OptionText>Choose the correct anwer:</OptionText>
			<RadioGroup value={answer} onChange={handleChange}>
				{answers.map((a, index) => (
					<Radio key={a} value={index} label={a} />
				))}
			</RadioGroup>
		</Card>
	);
}

QuestionCard.propTypes = {
	id: PropTypes.string.isRequired,
	question: PropTypes.string.isRequired,
	answers: PropTypes.arrayOf(PropTypes.string).isRequired,
	answer: PropTypes.number.isRequired,
	setExerciseQuestionAnswer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setExerciseQuestionAnswer: (id, answer) =>
		dispatch(setExerciseQuestionAnswer(id, answer)),
});

export default connect(null, mapDispatchToProps)(QuestionCard);
