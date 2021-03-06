import React from 'react';
import PropTypes from 'prop-types';
import { rankProps, exerciseRankProps } from '../utilities/proptypes';
import { Line, Link } from './Common';
import { H3, H4 } from './Headings';
import styled from '../styles';
import routes from '../routes';

const List = styled.ul`
	& > :not(:last-child) {
		margin-bottom: 1.2rem;
	}
`;
const ListItem = styled.li`
	display: flex;

	img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin-right: 1.5rem;
	}
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	> * {
		/* override bs */
		margin-bottom: 0;
	}
`;

export function Rank({ info }) {
	return (
		<ListItem>
			<img src={info.avatar} alt='user avatar' />
			<Content>
				<H4>
					<Link to={`${routes.profile.path}/${info.id}`}>{info.name}</Link>
				</H4>
				<p>{`Level: ${info.level}`}</p>
			</Content>
		</ListItem>
	);
}

Rank.propTypes = {
	info: rankProps.isRequired,
};

export function ExerciseRank({ info }) {
	return (
		<ListItem>
			<img src={info.avatar} alt='user avatar' />
			<Content>
				<H4>
					<Link to={`${routes.profile.path}/${info.id}`}>{info.name}</Link>
				</H4>
				<p>{`${info.score}/30 - ${info.time}`}</p>
			</Content>
		</ListItem>
	);
}

ExerciseRank.propTypes = {
	info: exerciseRankProps.isRequired,
};

const StandingBase = ({ className, title, standing, childBuilder }) => (
	<section className={className}>
		<H3 className='mb-sm'>{title}</H3>
		<List>
			{standing.map((u, index) => (
				<React.Fragment key={u.name}>
					{childBuilder(u)}
					{index !== standing.length - 1 ? <Line /> : null}
				</React.Fragment>
			))}
		</List>
	</section>
);
const standingProps = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	standing: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const standingDefaultProps = {
	// eslint-disable-next-line react/default-props-match-prop-types
	className: null,
};

StandingBase.propTypes = {
	...standingProps,
	childBuilder: PropTypes.func.isRequired,
};
StandingBase.defaultProps = standingDefaultProps;

const StandingSideBar = ({ className, title, standing }) => {
	return (
		<StandingBase
			className={className}
			title={title}
			standing={standing}
			childBuilder={(u) => <Rank info={u} />}
		/>
	);
};
StandingSideBar.propTypes = standingProps;
StandingSideBar.defaultProps = standingDefaultProps;

const ExerciseStandingSideBar = ({ className, title, standing }) => {
	return (
		<StandingBase
			className={className}
			title={title}
			standing={standing}
			childBuilder={(u) => <ExerciseRank info={u} />}
		/>
	);
};
ExerciseStandingSideBar.propTypes = standingProps;
ExerciseStandingSideBar.defaultProps = standingDefaultProps;

export { StandingSideBar, ExerciseStandingSideBar };
