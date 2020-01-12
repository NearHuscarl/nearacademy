import styled, { theme, appColors } from '../styles';

const H = styled.h1`
	font-family: ${theme.displayFont};
	font-weight: 600;
	color: ${appColors.greyDark3};
	line-height: 1.4;

	${(props) => props.primary && `color: ${appColors.primary};`}
`;

const Heading1 = H.withComponent('h1');
const Heading2 = H.withComponent('h2');
const Heading3 = H.withComponent('h3');
const Heading4 = H.withComponent('h4');

export const H1 = styled(Heading1)`
	font-size: 4rem;
`;

export const H2 = styled(Heading2)`
    font-size: 2rem;

	${(props) =>
		props.sub &&
		`
    	color: ${appColors.greyDark1};
		font-size: 1.2rem;
        font-weight: 400;
    `}
`;

export const H3 = styled(Heading3)``;

export const H4 = styled(Heading4)`
	font-size: 1.5rem;
`;
