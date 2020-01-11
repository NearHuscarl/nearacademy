import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { H4 } from './Headings';
import styled, { theme, mixins, appColors } from '../styles';

const Container = styled(Card)`
	display: inline-flex;
	width: 21rem;
	transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
	text-align: left;
	border: solid 1px ${appColors.greyLight3};

	& > :not(img) {
		padding: ${theme.cardPadding};
	}

	img {
		border-top-right-radius: inherit;
		border-top-left-radius: inherit;
		object-fit: cover;
		height: 11rem;
	}

	&:hover {
		${mixins.applyScale('transform: scale(1.075);')}
		box-shadow: 0 .25rem 1rem rgba(0,0,0,.1);
	}

	p {
		/* override bs reboot */
		margin-bottom: 0;
	}
`;
const Description = styled.p`
	font-weight: 600;
	font-size: 1.3rem;
`;
const Date = styled.p`
	font-size: 1.1rem;
`;

export default function ExerciseCard({ image, title, description, date }) {
	return (
		<Container background='white' noPadding>
			<img src={image} alt='exercise preview' />
			<div>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a href=''>
					<H4>{title}</H4>
				</a>
				<Description>{description}</Description>
				<Date>{`Phát hành: ${date}`}</Date>
			</div>
		</Container>
	);
}

ExerciseCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};
