import React from 'react';
import { H1 } from '../components/Headings';
import { SearchBar } from '../components/Input';
import { Bold, EllipsisButton, SizedBox } from '../components/Common';
import styled from '../styles';

const bookmarks = [
	{
		time: '00:50',
		date: '5 minutes ago',
		comment: "Thịnh Nam's introduction to Super-1 roadmap",
	},
	{
		time: '03:20',
		date: '2 minutes ago',
		comment: "Thịnh Nam's introduction to Super-plus roadmap",
	},
	{
		time: '05:00',
		date: '1 minutes ago',
		comment: "Thịnh Nam's introduction to Super-2 roadmap",
	},
];

const H1Small = styled(H1)`
	font-size: 2.5rem;
	margin-bottom: 1rem;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 3rem;
`;
const FlagItem = styled.li`
	display: flex;
`;
const FlagBody = styled.div`
	margin-left: 1.5rem;
	margin-right: auto;

	&:not(:last-child) {
		margin-bottom: 1.5rem;
	}
`;

export default function CourseDetailPageBookmark() {
	return (
		<div>
			<Header>
				<H1Small>{`Bookmarks (${bookmarks.length})`}</H1Small>
				<SearchBar placeholder='Find bookmarks...' width={30} />
			</Header>
			<ul>
				{bookmarks.map((f, i) => {
					const key = i;
					return (
						<FlagItem key={key}>
							<Bold>{f.time}</Bold>
							<FlagBody>
								<div>{f.date}</div>
								<SizedBox height={0.5} />
								<div>{f.comment}</div>
							</FlagBody>
							<EllipsisButton />
						</FlagItem>
					);
				})}
			</ul>
		</div>
	);
}
