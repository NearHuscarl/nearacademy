import React from 'react';
import PropTypes from 'prop-types';
import { Bold } from './Common';
import { exerciseHistoryProps } from '../utilities/proptypes';
import styled, { appColors } from '../styles';

const List = styled.ul`
	display: grid;
	row-gap: 1rem;
`;
const ListItem = styled.li`
	display: grid;
	grid-template-columns: 4rem minmax(17rem, 1fr) minmax(9rem, .8fr) minmax(12rem, 1.2fr);
	column-gap: 4.5rem;
	align-items: center;
	padding: 1rem 0.5rem;

	:nth-child(odd) {
		background-color: ${appColors.greyLight0};
	}

	& > :first-child {
		text-align: center;
	}
`;
const Header = styled(ListItem)`
	margin-bottom: 1.3rem;

	:nth-child(odd) {
		background-color: ${appColors.white};
	}
`;

export function Rank({ info, index }) {
	return (
		<ListItem>
			<div>{index + 1}</div>
			<div>{info.timeTaken}</div>
			<div>{info.score}</div>
			<div>{info.time}</div>
		</ListItem>
	);
}

Rank.propTypes = {
	info: exerciseHistoryProps.isRequired,
	index: PropTypes.number.isRequired,
};

export default function ExerciseHistory({ className, list }) {
	return (
		<>
			<Header>
				<Bold>Attempt</Bold>
				<Bold>Date</Bold>
				<Bold>True answers</Bold>
				<Bold>Duration</Bold>
			</Header>
			<List className={className}>
				{list.map((u, index) => (
					<Rank key={u.name} info={u} index={index} />
				))}
			</List>
		</>
	);
}

ExerciseHistory.propTypes = {
	className: PropTypes.string,
	list: PropTypes.arrayOf(exerciseHistoryProps).isRequired,
};
ExerciseHistory.defaultProps = {
	className: null,
};
