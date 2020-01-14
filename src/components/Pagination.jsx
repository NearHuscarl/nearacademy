import React, { useState } from 'react';
import range from 'lodash/range';
import { WhiteButton } from './Buttons';
import styled from '../styles';

const Container = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, min-content) repeat(7, 3.3rem) repeat(
			2,
			min-content
		);
	grid-template-rows: repeat(auto-fit, 3.3rem);
	column-gap: 0.4rem;
`;
const DotDotDot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function getButton(index, currentPage, setCurrentPage) {
	const selectedPage = currentPage === index;
	return (
		<WhiteButton
			key={index}
			type='button'
			dense
			active={selectedPage}
			onClick={() => setCurrentPage(() => index)}
		>
			{index}
		</WhiteButton>
	);
}

export default function Pagination() {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<Container>
			<WhiteButton type='button' dense>
				First
			</WhiteButton>
			<WhiteButton type='button' dense>
				Prev
			</WhiteButton>
			{range(1, 6).map((i) => getButton(i, currentPage, setCurrentPage))}
			<DotDotDot>...</DotDotDot>
			{getButton(30, currentPage, setCurrentPage)}
			<WhiteButton type='button' dense>
				Next
			</WhiteButton>
			<WhiteButton type='button' dense>
				Last
			</WhiteButton>
		</Container>
	);
}
