import React from 'react';
import PropTypes from 'prop-types';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizedBox } from './Common';
import { H2 } from './Headings';
import styled, { appColors } from '../styles';

const Box = styled.div`
	background-color: ${appColors.greyLight1};
	border: solid 1px #dedfe0;
	padding: 1.8rem 3rem;
    font-size: 1.5rem;

    h2 {
        margin-bottom: 1.5rem;
    }
`;

const Features = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 5rem;
	row-gap: 1.6rem;
	/* reset bs reboot */
	margin-bottom: 0;
`;

export default function FeatureBox({ features }) {
	return (
		<Box>
			<H2>What you'll learn?</H2>
			<Features>
				{features.map((f, i) => {
					const key = i;
					return (
						<li key={key}>
							<FontAwesomeIcon icon={faCheck} size='sm' />
							<SizedBox width={0.75} />
							<span>{f}</span>
						</li>
					);
				})}
			</Features>
		</Box>
	);
}

FeatureBox.propTypes = {
	features: PropTypes.arrayOf(PropTypes.string).isRequired,
};
