import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
	faChevronLeft,
	faStar,
	faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar } from 'react-circular-progressbar';
import { ButtonText } from '../components/Buttons';
import { SizedBox, EllipsisButton } from '../components/Common';
import styled, { appColors } from '../styles';

const Header = styled.header`
	background-color: ${appColors.darkBlue};
	color: ${appColors.white};
	height: 7rem;
	padding: 0 3rem;

	display: flex;
	justify-content: start;
	align-items: center;

	button:not(:last-child) {
		margin-right: 1.25rem;
	}
	[class*='fa']:not(:last-child) {
		margin-right: 0.5rem;
	}

	& > [class*='fa'] {
		color: ${appColors.greyDark2};
	}
`;
const Title = styled.h1`
	font-weight: 600;
	font-size: 1.6rem;
	display: inline;
	margin: 0;
	margin-right: auto;
`;

const ProgressCircle = styled.div`
	color: ${appColors.greyDark2};
	position: relative;
	width: 2rem;
	height: 2rem;

	.circle {
		width: 100%;
		height: 100%;
	}

	.circle,
	.icon {
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
	}
`;

export default function CourseHeader({ title }) {
	const history = useHistory();
	return (
		<Header>
			<ButtonText type='button' onClick={() => history.push(`/courses`)}>
				<FontAwesomeIcon icon={faChevronLeft} size='lg' />
			</ButtonText>
			<SizedBox width={0.75} />
			<Title>{title}</Title>
			<FontAwesomeIcon icon={faStar} />
			<ButtonText type='button'>
				<span>Review course</span>
			</ButtonText>
			<ProgressCircle className='fa'>
				<CircularProgressbar
					className='circle'
					value={0.2}
					maxValue={1}
					styles={{
						root: { width: '2rem' },
						path: {
							stroke: 'cyan',
						},
						trail: {
							stroke: appColors.greyDark2,
						},
					}}
				/>
				<FontAwesomeIcon className='icon' icon={faTrophy} size='xs' />
			</ProgressCircle>
			<ButtonText type='button'>
				<span>Your progress</span>
			</ButtonText>
			<SizedBox width={1} />
			<EllipsisButton />
		</Header>
	);
}

CourseHeader.propTypes = {
	title: PropTypes.string.isRequired,
};
