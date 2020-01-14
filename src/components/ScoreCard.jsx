import React from 'react';
import { Line } from './Common';
import styled, { appColors, theme } from '../styles';
import { transparentize } from '../utilities/colors';
import congratsImg from '../../public/images/congrats.jpg';
import { H4 } from './Headings';

const borderColor = appColors.greyLight3;
const Container = styled.div`
	width: 21rem;
	border: solid 0.1rem ${borderColor};
	border-radius: ${theme.borderRound};

	background-image: url(${congratsImg});
	background-color: ${transparentize(appColors.white, 0.1)};
	background-blend-mode: overlay;
	background-size: cover;

	text-align: center;

	h4 {
		margin-top: 0.9rem;
		/* .line's vertical margin is .5rem */
		margin-bottom: 0.3rem; // override bs heading default;
	}
`;
const Content = styled.div`
	padding-bottom: 0.5rem;

	.score {
		font-size: 3.6rem;
		font-weight: 600;
		color: ${appColors.secondary};
	}

	.date {
		font-size: 0.9rem;
	}
`;
const Bottom = styled.div`
	display: flex;

	& > * {
		padding: 0.8rem 0.5rem;
		padding-bottom: 0.5rem;
		flex: 1;
	}

	& > :first-child {
		border-right: solid 0.1rem ${borderColor};
	}

	.label {
		font-size: 1rem;
	}

	.value {
		font-size: 2rem;
		font-weight: 600;
	}
`;

export default function ScoreCard() {
	return (
		<Container>
			<H4>Personal Best</H4>
			<Line dark />
			<Content>
				<div>Highest Score</div>
				<div className='score'>30/30</div>
				<div>10 mins 56 secs</div>
				<div className='date'>31/10/2019</div>
			</Content>
			<Line dark noMargin />
			<Bottom>
				<div>
					<div className='label'>Total attempts</div>
					<div className='value'>10</div>
				</div>
				<div>
					<div className='label'>Experience score</div>
					<div className='value'>600</div>
				</div>
			</Bottom>
		</Container>
	);
}
