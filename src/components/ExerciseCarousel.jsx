import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ExerciseCard from './ExerciseCard';
import { exerciseProps } from '../utilities/proptypes';
import styled, { appColors } from '../styles';
import { H3 } from './Headings';

const Container = styled.section`
	padding: 0 3rem;
	padding-top: 1rem;

	h3 {
		margin-left: -3rem;
	}
`;

const StyledSlider = styled(Slider)`
	/* react-slick package */
	.slick-slide {
		/* dont know why carousel item is not centered by default */
		text-align: center;
		padding-top: 1.5rem;
		padding-bottom: 2.5rem;
	}

	.arrow-left,
	.arrow-right {
		&::before {
			transition: all 0.25s ease-out;
			color: ${appColors.primary};
		}
	}
`;

function PreviousButton({ className, onClick }) {
	return (
		<div
			className={className + ' arrow-right'}
			aria-hidden='true'
			onClick={onClick}
		/>
	);
}
function NextButton({ className, onClick }) {
	return (
		<div
			className={className + ' arrow-left'}
			aria-hidden='true'
			onClick={onClick}
		/>
	);
}
PreviousButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};
NextButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};
PreviousButton.defaultProps = {
	className: '',
	onClick: null,
};
NextButton.defaultProps = {
	className: '',
	onClick: null,
};

const resonsiveSettings = [
	{
		breakpoint: 940,
		settings: {
			slidesToShow: 3,
		},
	},
	{
		breakpoint: 730,
		settings: {
			draggable: true,
			slidesToShow: 2,
			arrows: false,
		},
	},
	{
		breakpoint: 500,
		settings: {
			draggable: true,
			slidesToShow: 1,
			arrows: false,
		},
	},
];

export default function ExerciseCarousel({ title, list, slidesToShow }) {
	return (
		<Container>
			<H3 className='mb-0'>{title}</H3>
			<StyledSlider
				slidesToShow={slidesToShow}
				slidesToScroll={1}
				infinite={false}
				nextArrow={<NextButton />}
				prevArrow={<PreviousButton />}
				draggable={false}
				responsive={resonsiveSettings}
			>
				{list.map((e) => (
					<ExerciseCard
						key={e.id}
						image={e.image}
						title={e.title}
						description={`${e.questionCount} questions - ${e.difficulty}`}
						date={e.publish}
					/>
				))}
			</StyledSlider>
		</Container>
	);
}

ExerciseCarousel.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(exerciseProps).isRequired,
	slidesToShow: PropTypes.number,
};

ExerciseCarousel.defaultProps = {
	slidesToShow: 4,
};
