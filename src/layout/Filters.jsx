import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Selector from '../components/Selector';
import styled, { appColors, theme } from '../styles';
import Input, { InputGroupFloatingButton } from '../components/Input';
import { H2 } from '../components/Headings';
import { OrangeButton, ButtonChip } from '../components/Buttons';
import subjects from '../data/subjects';

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

const difficultyOptions = [
	{ value: 'all_level', label: 'All Levels' },
	{ value: 'beginner', label: 'Beginner' },
	{ value: 'intermediate', label: 'Intermediate' },
	{ value: 'expert', label: 'Expert' },
];
const subjectOptions = [
	{ value: subjects[0], label: subjects[0] },
	{ value: subjects[1], label: subjects[1] },
	{ value: subjects[2], label: subjects[2] },
	{ value: subjects[3], label: subjects[3] },
	{ value: subjects[4], label: subjects[4] },
	{ value: subjects[5], label: subjects[5] },
	{ value: subjects[6], label: subjects[6] },
	{ value: subjects[7], label: subjects[7] },
];
const sortOptions = [
	{ value: 'most_related', label: 'Most related' },
	{ value: 'newest', label: 'Newest' },
];

export default function Filters({ title, subTitle, isTeacherFilter }) {
	const [subject, setSubject] = useState('');
	const [difficult, setDifficult] = useState('');
	const [sort, setSort] = useState('');

	return (
		<FilterBackground>
			<FilterContainer>
				<div>
					<H2>{title}</H2>
					<p>{subTitle}</p>
				</div>
				<FilterGroup>
					{!isTeacherFilter && (
						<Selector
							width={14}
							value={difficult}
							placeholder='Difficulty'
							onChange={(value) => setDifficult(() => value)}
							options={difficultyOptions}
						/>
					)}
					<Selector
						width={14}
						value={subject}
						placeholder='Subject'
						onChange={(value) => setSubject(() => value)}
						options={subjectOptions}
					/>
					{!isTeacherFilter && (
						<Selector
							width={14}
							value={sort}
							placeholder='Sort by'
							onChange={(value) => setSort(() => value)}
							options={sortOptions}
						/>
					)}
				</FilterGroup>

				<Search>
					<Input type='text' placeholder='Enter keywords to search...' />
				</Search>
				<ChipGroup>
					<ButtonChip name='Chemistry' onClick={() => {}} />
					<ButtonChip name='Biology' onClick={() => {}} />
					<OrangeButton type='button'>Delete filters</OrangeButton>
				</ChipGroup>
			</FilterContainer>
		</FilterBackground>
	);
}

Filters.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	isTeacherFilter: PropTypes.bool,
};

Filters.defaultProps = {
	isTeacherFilter: false,
}
