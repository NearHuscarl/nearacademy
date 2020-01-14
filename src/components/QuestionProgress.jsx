import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown-now';
import Button, { WhiteButton } from './Buttons';
import Card from './Card';
import { setTimeTaken, startSetScore } from '../actions/exerciseResult';
import styled, { appColors } from '../styles';
import routes from '../routes';

const gutter = '.4rem';
const Container = styled(Card)`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, 3rem);
	gap: ${gutter};

	padding: 2rem;
	padding-top: 1.3rem;
`;
const TextSpan = styled.div`
	grid-column: 1 / -1;
	text-align: center;
`;
const Time = styled(TextSpan)`
	font-size: 3.6rem;
	font-weight: 600;
	color: ${appColors.greyDark3};
`;
const Stats = styled(TextSpan)`
	text-align: left;
	font-size: 0.9rem;
`;
const ProgressBar = styled(TextSpan)`
	position: relative;
	background-color: ${appColors.primaryLight};
	height: 0.5rem;
	border-radius: 9.9rem;
	margin-bottom: calc(1.6rem - ${gutter});

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: ${(props) => props.progress}%;
		height: 100%;

		border-radius: inherit;
		background-color: ${appColors.primary};
		transition: width 0.25s;
	}
`;
const QButton = styled(WhiteButton)`
	width: 3rem;
	height: 3rem;
	padding: 0;
	font-size: 1.3rem;
`;
const Actions = styled(TextSpan)`
	display: flex;
	margin-top: calc(2.2rem - ${gutter});
	justify-content: center;

	& > :not(:last-child) {
		margin-right: 1rem;
	}
`;

const timeTaken = {
	minutes: 0,
	seconds: 0,
};
const Counter = (
	<Countdown
		renderer={({ minutes, seconds }) => {
			timeTaken.minutes = minutes;
			timeTaken.seconds = seconds;
			return (
				<span>
					{zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
			);
		}}
		date={Date.now() + (10 * 60 + 56) * 1000}
	/>
);

function QuestionProgress({
	exerciseId,
	questions,
	resetExercise,
	// eslint-disable-next-line no-shadow
	startSetScore,
	// eslint-disable-next-line no-shadow
	setTimeTaken,
}) {
	const history = useHistory();
	const questionArray = Object.values(questions);
	const questionsAnswered = questionArray.reduce((prev, q) => {
		if (q.answer !== -1) {
			return prev + 1;
		}
		return prev;
	}, 0);
	const progress = ((questionsAnswered / questionArray.length) * 100).toFixed(
		0,
	);

	return (
		<Container>
			<TextSpan>Time left</TextSpan>
			<Time>{Counter}</Time>
			<Stats>
				{`${questionsAnswered}/${questionArray.length} questions answered (${progress}%)`}
			</Stats>
			<ProgressBar progress={progress} />
			{questionArray.map(({ answer }, index) => {
				const key = index + 1;
				return (
					<QButton key={key} type='button' active={answer !== -1}>
						{key}
					</QButton>
				);
			})}
			<Actions>
				<WhiteButton type='button' onClick={resetExercise}>
					Restart
				</WhiteButton>
				<Button
					type='button'
					onClick={() => {
						startSetScore(exerciseId);
						setTimeTaken(timeTaken);
						history.push(`${routes.exercise.path}/${exerciseId}/result`);
					}}
				>
					Submit
				</Button>
			</Actions>
		</Container>
	);
}

QuestionProgress.propTypes = {
	questions: PropTypes.objectOf(
		PropTypes.shape({
			flag: PropTypes.bool,
			answer: PropTypes.number,
		}),
	).isRequired,
	resetExercise: PropTypes.func.isRequired,
	exerciseId: PropTypes.string.isRequired,
	startSetScore: PropTypes.func.isRequired,
	setTimeTaken: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	startSetScore: (exerciseId) => dispatch(startSetScore(exerciseId)),
	setTimeTaken: (time) => dispatch(setTimeTaken(time)),
});

export default connect(null, mapDispatchToProps)(QuestionProgress);
