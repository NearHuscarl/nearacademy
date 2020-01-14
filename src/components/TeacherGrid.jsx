import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { teacherProps } from '../utilities/proptypes';
import { Link, Bold } from './Common';
import styled, { appColors, theme, curves } from '../styles';
import { H4 } from './Headings';
import Button from './Buttons';
import routes from '../routes';

const Item = styled.li`
	max-width: 23rem;
	box-shadow: ${theme.shadowLight};
	display: flex;
	flex-direction: column;
	transition: box-shadow 0.45s ${curves.easeOutSine};
	border-radius: ${theme.borderRound};

	&:hover {
		box-shadow: ${theme.shadowDark};
	}

	img {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
		width: 100%;
		height: 20rem;
		object-fit: cover;
	}
	.body {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		height: 100%;

		h4 {
			margin-bottom: 0;
		}

		.school {
			font-size: 1.3rem;
			margin-bottom: 0.8rem;
		}

		.info {
			font-size: 1.2rem;
			.highlight {
				color: ${appColors.tertiary};
			}
		}

		.summary {
			font-size: 1.3rem;
			margin: 1.3rem 0;
			line-height: 1.7rem;
		}

		button {
			margin-top: auto;
			padding: 1rem 0;
			width: 100%;
		}
	}
`;

function GridItem({ teacher }) {
	const history = useHistory();
	const path = `${routes.teacher.path}/001`;
	return (
		<Item>
			<img src={teacher.image} alt='teacher' />
			<div className='body'>
				<H4>
					<Link to={path}>{teacher.name}</Link>
				</H4>
				<Bold className='school'>{teacher.school}</Bold>
				<div className='info'>
					<span>Subject: </span>
					<Bold as='span' className='highlight'>
						{teacher.subject}
					</Bold>
					<span> - Exp: </span>
					<Bold as='span' className='highlight'>
						{teacher.experience}
					</Bold>
					<span> years</span>
				</div>
				<div className='summary'>{teacher.summary}</div>
				<Button type='button' onClick={() => history.push(path)}>
					See More
				</Button>
			</div>
		</Item>
	);
}

GridItem.propTypes = {
	teacher: teacherProps.isRequired,
};

const Grid = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
	justify-items: center;
	row-gap: 4rem;
`;

export default function TeacherGrid({ list }) {
	return (
		<Grid>
			{list.map((t) => (
				<GridItem teacher={t} />
			))}
		</Grid>
	);
}

TeacherGrid.propTypes = {
	list: PropTypes.arrayOf(teacherProps).isRequired,
};
