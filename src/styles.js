import styled, { createGlobalStyle } from 'styled-components';
import { darken, lighten, transparentize, opacity, mix } from './utilities/colors';

export { createGlobalStyle };

const pxToEm = (pixel) => (pixel / 16/* px */) * 1/* em */;

/**
 * 
 * @param {*} size 
 * @param {*} content 
 * Usage:
 * ```
 * ${media(850)} {
      font-size: 18px;
    }
 * ```
 */
export const media = (size) =>
	`@media only screen and (max-width: (${pxToEm(size)}em))`;

export const curves = {
	easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1);',
	easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1);',
	easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045);',
	easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275);',
	easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
};

export const appColors = {
	primaryDark: '#1d779f',
	primary: '#2AABE4',
	primaryLight: '#94d5f1',
	secondary: '#Fc9e31',
	secondaryDark: '#ef8f31',
	tertiary: '#5ac18e',
	red: '#e02020',
	lightRed: '#ef4c45',
	orange: '#Fc9e31',
	orangeDark: '#ef8f31',
	lightGreen: '#6dc33b',
	green: '#45ae07',
	yellow: '#F1C40F',
	blue: '#1d779f',
	lightBlue: '#0077cc',
	udemyBlue: '#007791',
	greyLight0: '#f7f8fa',
	greyLight1: '#f5f5f5',
	greyLight2: '#eee',
	greyLight3: '#dddddd',
	greyDark1: '#999',
	greyDark2: '#777',
	greyDark3: '#585858',
	darkBlue: '#29303b',
	white: '#ffffff',
	black: '#000000',
};

export const mixins = {
	darken,
	lighten,
	transparentize,
	opacity,
	mix,

	// https://stackoverflow.com/a/16878602/9449426
	// somewhat mitigate blurried text when applying scaling transform
	applyScale: (scale) => `
	backface-visibility: hidden;
	transform: translateZ(0);
	-webkit-font-smoothing: subpixel-antialiased;
	${scale}
	`,

	underlineExpandAnimation: (
		duration,
		color = appColors.primary,
		lineHeight = '0.1rem',
	) => `
	position: relative;

	&::before {
		content: '';
		position: absolute;
		display: block;
		background-color: ${color};
		width: 0;
		height: ${lineHeight};
		margin: 0 auto;

		bottom: 0;
		transition: width ${duration};
	}

	&:hover:before {
		width: 100%;
	}
	&:focus:before {
		width: 100%;
	}
	`,
};

export const helperStyles = {
	marginRightTiny: '{ margin-right: .5rem; }',
	marginLeftTiny: '{ margin-left: .5rem; }',
	marginTopTiny: '{ margin-top: .5rem; }',
	marginBottomTiny: '{ margin-bottom: .5rem; }',
	marginRightSmall: '{ margin-right: 1rem; }',
	marginLeftSmall: '{ margin-left: 1rem; }',
	marginTopSmall: '{ margin-top: 1rem; }',
	marginBottomSmall: '{ margin-bottom: 1rem; }',
	marginRightMedium: '{ margin-right: 2rem; }',
	marginLeftMedium: '{ margin-left: 2rem; }',
	marginTopMedium: '{ margin-top: 2rem; }',
	marginBottomMedium: '{ margin-bottom: 2rem; }',
	marginRightLarge: '{ margin-right: 4rem; }',
	marginLeftLarge: '{ margin-left: 4rem; }',
	marginTopLarge: '{ margin-top: 4rem; }',
	marginBottomLarge: '{ margin-bottom: 4rem; }',
	marginRightHuge: '{ margin-right: 8rem; }',
	marginLeftHuge: '{ margin-left: 8rem; }',
	marginTopHuge: '{ margin-top: 8rem; }',
	marginBottomHuge: '{ margin-bottom: 8rem; }',
	marginBottom0: '{ margin-bottom: 0; }',
	bold: '{ font-weight: 600; }',
};

export const theme = {
	fontColor: appColors.greyDark2,
	shadowDark: '0 2rem 4rem rgba(0, 0, 0, 0.3)',
	shadowLight: '0 2rem 5rem rgba(0, 0, 0, 0.06)',
	borderRound: '.6rem',
	cardPadding: '1.25rem 1.5rem',
	pageContainerWidth: '99rem',
	primaryFont: '"Open Sans", sans-serif',
	displayFont: '"Roboto", sans-serif',
};

export default styled;
