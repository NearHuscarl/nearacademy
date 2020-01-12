import styled, { appColors, curves, theme } from '../styles';

const PercentageBar = styled.div`
	position: relative;

	/* answer percentage overlay of this answer */
	&::before {
		background-color: ${appColors.primary};

		width: ${(props) => props.value}%;
		height: 100%;
		border-radius: inherit;

		position: absolute;
		top: 0;
		left: 0;

		z-index: 1;
		content: '';
		transition: all 0.25s ${curves.easeOutBack};
	}

	background-color: ${appColors.primaryLight};
	border-radius: ${theme.borderRound};
	padding: 0.3rem 1rem;
	transition: all 0.25s ${curves.easeOutBack};
`;

export const PercentageBarText = styled.div`
	position: relative;

	font-size: 1.4rem;
	color: ${appColors.white};
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	z-index: 2;
`;

export default PercentageBar;
