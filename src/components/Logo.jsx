import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoImage from '../../public/images/logo.png';
import { H1 } from './Headings';
import styled, { appColors } from '../styles';

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;

	h1 {
		font-size: 2.25rem;

		.orange {
			color: ${appColors.primary};
		}
	}

	img {
		height: 3.5rem;
		margin-right: 0.5rem;
		margin-top: -0.75rem;
	}
`;

export default function Logo({ className }) {
	return (
		<StyledLink to='/' className={className}>
			<img src={LogoImage} alt='logo' />
			<H1>
				<span>Near</span>
				<span className='orange'>Academy</span>
			</H1>
		</StyledLink>
	);
}

Logo.propTypes = {
	className: PropTypes.string,
};

Logo.defaultProps = {
	className: null,
};
