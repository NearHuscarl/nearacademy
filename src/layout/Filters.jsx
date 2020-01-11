import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Selector from '../components/Selector';
import styled, { appColors, theme } from '../styles';
import Input, { InputGroupFloatingButton } from '../components/Input';
import { H2 } from '../components/Headings';
import { GreyButton, ButtonChip } from '../components/Buttons';

const FilterBackground = styled.div`
	background-color: ${appColors.greyLight1};
`;
const FilterContainer = styled.div`
	max-width: ${theme.pageContainerWidth};
	padding: 2.8rem 0;
	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: min-content;
	gap: 1.8rem;

	/* override bs's reboot */
	p {
		margin-bottom: 0;
	}
`;
const FilterGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	& > :not(:last-child) {
		margin-right: 1.5rem;
	}
`;
const FilterOption = styled(Selector)`
	width: 10rem;
`;
const FilterSort = styled(Selector)`
	width: 14rem;
`;
const Search = styled(InputGroupFloatingButton)`
	grid-column: 1 / -1;
	position: relative;
`;
const ChipGroup = styled.div`
	display: flex;
	align-items: center;

	& > :not(:last-child) {
		margin-right: 0.8rem;
	}
`;

const filterOptions = [
	{ value: 'difficulty', label: 'Độ khó' },
	{ value: 'class', label: 'Lớp' },
];
const sortOptions = [
	{ value: 'most_related', label: 'Phù hợp nhất' },
	{ value: 'newest', label: 'Mới nhất' },
];

export default function Filters({ title, subTitle }) {
	const [filter, setFilter] = useState('');
	const [sort, setSort] = useState('');

	return (
		<FilterBackground>
			<FilterContainer>
				<div>
					<H2>{title}</H2>
					<p>{subTitle}</p>
				</div>
				<FilterGroup>
					<FilterOption
						value={filter}
						placeholder='Bộ lọc'
						onChange={(value) => setFilter(() => value)}
						options={filterOptions}
					/>
					<FilterSort
						value={sort}
						placeholder='Sắp xếp theo'
						onChange={(value) => setSort(() => value)}
						options={sortOptions}
					/>
				</FilterGroup>

				<Search>
					<Input
						type='text'
						placeholder='Nhập từ khóa cần tìm kiếm...'
					/>
				</Search>
				<ChipGroup>
					<ButtonChip name='Hóa học' onClick={() => {}} />
					<ButtonChip name='Sinh học' onClick={() => {}} />
					<GreyButton type='button'>
						Xóa bộ lọc
					</GreyButton>
				</ChipGroup>
			</FilterContainer>
		</FilterBackground>
	);
}

Filters.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};
