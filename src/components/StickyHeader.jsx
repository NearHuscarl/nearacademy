import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '../styles';

const setUpScrollListener = () => {
	const [isSticky, setSticky] = useState(false);
	const ref = useRef(null);
	const handleScroll = () => {
		setSticky(ref.current.getBoundingClientRect().top <= 0);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);

	return [isSticky, ref];
};

const StickyContainer = styled.div`
	position: relative;

	${(props) => props.sticky ? '& > *' : '_____'} {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
`;

export default function StickyHeader({ children }) {
	const [isSticky, ref] = setUpScrollListener();

	return (
		<StickyContainer ref={ref} sticky={isSticky}>
			{children}
		</StickyContainer>
	);
};

StickyHeader.propTypes = {
	children: PropTypes.node.isRequired,
}