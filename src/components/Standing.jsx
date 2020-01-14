import React from 'react';
import PropTypes from 'prop-types';
import { Bold, Link } from './Common';
import { rankProps } from '../utilities/proptypes';
import styled, { theme } from '../styles';
import routes from '../routes';

const List = styled.ul`
	display: grid;
	row-gap: 1rem;
`;
const ListItem = styled.li`
	display: grid;
	grid-template-columns:
		2rem minmax(10rem, 12.5rem) minmax(14rem, max-content)
		minmax(18rem, 22rem) minmax(7.5rem, 11rem) 1.5rem;
	column-gap: 5rem;
	align-items: center;

	.rank,
	.level {
		text-align: right;
	}

	img {
		width: 3rem;
		height: 3rem;
		border-radius: ${theme.borderRound};
		margin-right: 0.8rem;
		box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
	}
`;
const Header = styled(ListItem)`
	margin-bottom: 1.3rem;
`;

export function Rank({ info }) {
	return (
		<ListItem>
			<div className='rank'>{info.rank}</div>
			<div>
				<img src={info.avatar} alt='user avatar' />
				<Link to={`${routes.profile.path}/${info.id}`}>{info.id}</Link>
			</div>
			<div>{info.name}</div>
			<div>{info.school}</div>
			<div>{info.province}</div>
			<div className='level'>{info.level}</div>
		</ListItem>
	);
}

Rank.propTypes = {
	info: rankProps.isRequired,
};

export default function Standing({ className, standing }) {
	return (
		<>
			<Header>
				<Bold>Rank</Bold>
				<Bold>Profile</Bold>
				<Bold>Name</Bold>
				<Bold>School</Bold>
				<Bold>Location</Bold>
				<Bold>Level</Bold>
			</Header>
			<List className={className}>
				{standing.map((u) => (
					<Rank key={u.name} info={u} />
				))}
			</List>
		</>
	);
}

Standing.propTypes = {
	className: PropTypes.string,
	standing: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Standing.defaultProps = {
	className: '',
};
