import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from './Headings';
import styled, { theme, helperStyles, appColors } from '../styles';
import ads from '../data/ads';

const AdsContainer = styled.div`
	display: grid;
	grid-auto-rows: min-content;

	& > :not(:last-child) {
		${helperStyles.marginBottomSmall}
	}

	img {
		width: 21rem;
		height: 11rem;
		object-fit: cover;
		border-radius: ${theme.borderRound};
		box-shadow: 0 0 1px 1px ${appColors.greyLight2};
		cursor: pointer;
	}
`;

export default function Ads({ count }) {
	return (
		<AdsContainer>
			<H3 className='mb-sm'>Ads</H3>
			{ads.slice(0, count).map((a) => (
				<a
					key={a}
					href='https://nearhuscarl.github.io/portfolio'
					alt='notads'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img src={a} alt='ads' />
				</a>
			))}
		</AdsContainer>
	);
}

Ads.propTypes = {
	count: PropTypes.number,
};

Ads.defaultProps = {
	count: 2,
};
