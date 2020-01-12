import React from 'react';
import PropTypes from 'prop-types';
import {
	faFacebookF,
	faYoutube,
	faTwitter,
	faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { appColors, theme, mixins } from '../styles';

const MediaButton = styled.button`
	width: 3rem;
	height: 3rem;
	border: none;
	border-radius: 50%;
	color: ${appColors.white};
	transition: all 0.4s;

	&:hover {
		background-color: ${appColors.white};
		${mixins.applyScale('transform: scale(1.048) rotate(360deg);')}
	}
`;

const FacebookButtonContainer = styled(MediaButton)`
	background-color: #4267b2;
	&:hover {
		color: #4267b2;
	}
`;

const YoutubeButtonContainer = styled(MediaButton)`
	background-color: #ff0000;
	&:hover {
		color: #ff0000;
	}
`;

const TwitterButtonContainer = styled(MediaButton)`
	background-color: #1da1f2;
	&:hover {
		color: #1da1f2;
	}
`;

const GoogleButtonContainer = styled(MediaButton)`
	background-color: #ea4848;
	&:hover {
		color: #ea4848;
	}
`;

export function FacebookButton() {
	return (
		<FacebookButtonContainer type='button'>
			<FontAwesomeIcon icon={faFacebookF} />
		</FacebookButtonContainer>
	);
}

export function YoutubeButton() {
	return (
		<YoutubeButtonContainer type='button'>
			<FontAwesomeIcon icon={faYoutube} />
		</YoutubeButtonContainer>
	);
}

export function TwitterButton() {
	return (
		<TwitterButtonContainer type='button'>
			<FontAwesomeIcon icon={faTwitter} />
		</TwitterButtonContainer>
	);
}

export function GoogleButton() {
	return (
		<GoogleButtonContainer type='button'>
			<FontAwesomeIcon icon={faGoogle} />
		</GoogleButtonContainer>
	);
}

const ButtonBase = styled.button`
	/*
	background-color: color(primary);
	color: #fff;
	font-family: var(--font-display);
	font-size: 1.5rem;
	text-transform: uppercase;
	*/
	border: 0.1rem solid transparent;
	padding: 0.5rem 1.3rem;
	/* cursor: pointer; */
	transition: all 0.2s;
	font-size: 1.35rem;
	/* text-transform: uppercase; */
	color: ${appColors.white};
	background-color: ${appColors.primary};
	border-radius: ${theme.borderRound};
	overflow: hidden;

	&:focus {
		outline: none;
	}
`;

const Button = styled(ButtonBase)`
	/* button fontawesome icon */
	& > [class*='fa-']:not(:last-child) {
		margin-right: 0.75rem;
	}

	&:hover {
		color: ${appColors.white};
		background-color: ${appColors.primaryDark};
	}
	&:focus {
		box-shadow: none; /* override bs */
	}

	&:active,
	&:focus,
	&:hover {
		/* override bootstrap blue box-shadow */
		box-shadow: none;
	}

	${(props) =>
		props.dense
			? `
		display: inline-block;
		text-align: center;
		padding: 0.375rem 0.75rem;`
			: ''}
`;

export const WhiteButton = styled(Button)`
	border: solid 1px ${appColors.greyLight2};
	background-color: ${appColors.white};
	color: ${appColors.greyDark1};

	&:active,
	&:focus,
	&:hover {
		border-color: ${appColors.greyDark2};
		background-color: ${appColors.greyDark2};
		color: ${appColors.white};
	}
`;

export const PrimaryWhiteButton = styled(WhiteButton)`
	${(props) => (props.active ? '&,' : '')}
	&:active,
	&:focus,
	&:hover {
		border-color: ${appColors.primary};
		background-color: ${appColors.primary};
		color: ${appColors.white};
	}
`;

export const OrangeButton = styled(Button)`
	border-color: ${appColors.primary};
	background-color: ${appColors.primary};
	color: ${appColors.white};
`;

export const OpaqueButton = styled(Button)`
	border-color: transparent;
	background-color: ${mixins.opacity(appColors.primaryLight, 0.5)};
	color: ${mixins.darken(appColors.primary)};
`;

export const GreyButton = styled(Button)`
	background-color: ${appColors.greyLight3};
	color: ${appColors.greyDark2};
`;

const ButtonChipContainer = styled(ButtonBase)`
	display: inline-flex;
	background-color: ${appColors.greyLight3};
	color: ${appColors.greyDark2};

	.label {
		margin-right: 1.2rem;
	}

	.button {
		color: currentColor;
		border: none;
		background-color: transparent;
		transition: color 0.1s, transform 0.1s;
	}
	.button:focus,
	.button:active {
		outline: none;
		transform: translateY(0.05rem);
	}
	.button:hover {
		color: ${appColors.primary};
	}
`;

export function ButtonChip({ name, onClick }) {
	return (
		<ButtonChipContainer as='div'>
			<div className='label'>{name}</div>
			<button className='button' type='button' onClick={onClick}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
		</ButtonChipContainer>
	);
}

ButtonChip.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export const ButtonLink = styled.button`
	border: none;
	background-color: transparent;
	color: ${appColors.greyDark1};
	font-size: inherit;
	transition: all 0.2s;

	display: flex;
	justify-content: center;

	${mixins.underlineExpandAnimation('0.2s')}

	&:hover,
	&:focus {
		outline: none;
		color: ${appColors.primary};
		/* override bs hover */
		text-decoration: none;
	}

	&:active {
		transform: translateY(0.1rem);
	}
`;

export const ButtonText = styled.button`
	/* button fontawesome icon */
	& > [class*='fa-']:not(:last-child) {
		margin-right: 0.75rem;
	}

	border: none;
	background-color: transparent;
	color: inherit;
	font-size: inherit;
	transition: all 0.2s;
	outline: ${appColors.primary};
	padding: 0;

	&:hover,
	&:focus,
	&:active {
		outline: none;
		color: ${appColors.primary};
	}
`;

export default Button;
