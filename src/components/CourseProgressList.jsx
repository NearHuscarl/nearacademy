import React from 'react';
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from './Common';
import FoldableListItem, { ListItemVisible } from './FoldableListItem';
import { H4 } from './Headings';
import { courseSummary } from '../utilities/proptypes';
import styled, { appColors } from '../styles';

const Header = styled(ListItemVisible)`
	border: 1px solid ${appColors.greyLight3};
	border-bottom: none;
`;
const FoldedContent = styled.li`
	padding: 0.75rem 1.5rem;
	padding-left: calc((1.5rem - 0.9rem));
	transition: background-color 0.25s;

	&:hover {
		background-color: #e6f2f5;
	}
`;
const Title = styled.div`
	display: flex;
	align-items: center;
`;

const Length = styled.span`
	[class*='fa'] {
		margin-right: 0.5rem;
	}

	display: block;
	margin-left: 3rem;
	margin-top: -0.5rem;
	margin-bottom: 0.5rem;
	font-size: 1.2rem;
`;

const Container = styled.div`
	background-color: ${appColors.white};
	h4 {
		margin: 0;
	}
`;
const Stats = styled.div`
	font-size: 1.2rem;
`;

function getFoldedContentComponent(content) {
	return (
		<ul>
			{content.map((c, i) => {
				const key = i;
				return (
					<FoldedContent key={key}>
						<Title>
							<Checkbox />
							{`${i + 1}. ${c.title}`}
						</Title>
						<Length>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>{c.length}</span>
						</Length>
					</FoldedContent>
				);
			})}
		</ul>
	);
}

export default function CourseProgressList({ courseProgress }) {
	return (
		<Container>
			<Header>
				<H4>Course Content</H4>
				<FontAwesomeIcon icon={faTimes} />
			</Header>
			<ul>
				{courseProgress.map((c, i) => {
					const key = i + 1;
					return (
						<FoldableListItem
							key={key}
							startOpen={i === 0}
							foldedContent={getFoldedContentComponent(c.videos)}
						>
							<H4>{`Part ${i + 1}: ${c.title}`}</H4>
							<Stats>
								<span>{`0/${c.videos.length} | ${c.length}`}</span>
							</Stats>
						</FoldableListItem>
					);
				})}
			</ul>
		</Container>
	);
}

CourseProgressList.propTypes = {
	courseProgress: courseSummary.isRequired,
};
