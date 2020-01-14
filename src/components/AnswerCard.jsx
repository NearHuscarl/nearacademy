import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import PercentageBar, { PercentageBarText } from './PercentageBar';
import { answerProps } from '../utilities/proptypes';
import styled, { appColors, mixins } from '../styles';
import { H3 } from './Headings';
import { SizedBox } from './Common';

const AnswerBar = styled(PercentageBar)`
	padding: 0.3rem 3.5rem;

	&::before {
		background-color: ${(props) =>
			props.trueAnswer ? appColors.lightGreen : appColors.lightRed};
	}

	background-color: ${(props) =>
		props.trueAnswer
			? mixins.opacity(appColors.lightGreen, 0.25)
			: mixins.opacity(appColors.lightRed, 0.25)};
`;

const Checkbox = styled.div`
	background-color: ${appColors.white};
	width: 1.675rem;
	height: 1.675rem;
	border-radius: 50%;
	position: absolute;
	top: 0.7rem;
	left: 0.7rem;
	z-index: 2;

	&::before {
		content: '';
		position: absolute;
		display: inline-block;
		width: 1.225rem;
		height: 1.225rem;
		top: 0.225rem;
		left: 0.225rem;
		border-radius: 50%;
		background-color: ${(props) => {
			if (props.checked) {
				if (props.trueAnswer) {
					return appColors.green;
				}
				return appColors.red;
			}
			return 'transparent';
		}};
	}
`;
const AnswerText = styled.div`
	position: relative;

	font-size: 1.7rem;
	color: ${appColors.greyDark3};
	z-index: 2;
`;

export function AnswerPercentageBar({
	answer,
	trueAnswer,
	answerDetail,
	percentage,
}) {
	const value = Math.round(percentage * 100);
	return (
		<AnswerBar trueAnswer={trueAnswer} value={value}>
			<Checkbox checked={answer} trueAnswer={trueAnswer} />
			<AnswerText>{answerDetail}</AnswerText>
			<PercentageBarText>{`${value}% người tham gia lựa chọn`}</PercentageBarText>
		</AnswerBar>
	);
}

AnswerPercentageBar.propTypes = {
	answer: PropTypes.bool.isRequired,
	trueAnswer: PropTypes.bool.isRequired,
	answerDetail: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};

export default function AnswerCard({ answer }) {
	const { question, answers, userAnswer } = answer;
	return (
		<Card>
			<H3>{question}</H3>
			<SizedBox height={1} />
			{answers.map((a, i) => {
				const key = i;
				return (
					<React.Fragment key={key}>
						<AnswerPercentageBar
							answer={userAnswer === i}
							trueAnswer={answer.answer === i}
							answerDetail={a.text}
							percentage={a.percentage}
						/>
						<SizedBox height={1} />
					</React.Fragment>
				);
			})}
		</Card>
	);
}

AnswerCard.propTypes = {
	answer: PropTypes.shape({
		question: PropTypes.string.isRequired,
		answer: PropTypes.number.isRequired,
		userAnswer: PropTypes.bool.isRequired,
		answers: PropTypes.arrayOf(answerProps).isRequired,
	}).isRequired,
};
