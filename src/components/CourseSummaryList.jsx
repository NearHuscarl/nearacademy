import React from 'react';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UdemyFoldableListItem } from './FoldableListItem';
import { H2, H4 } from './Headings';
import { ButtonText } from './Buttons';
import { courseDetailProps } from '../utilities/proptypes';
import styled, { appColors, mixins } from '../styles';

const FoldedContent = styled.li`
	padding: 1.5rem;
	padding-left: 3.5rem;
	transition: background-color 0.25s;

	display: grid;
	grid-template-columns: 1fr max-content 6rem;
	align-items: center;

	& > :last-child {
		text-align: right;
	}

	&:hover {
		background-color: #e6f2f5;
	}
`;

const Leading = styled.div`
	margin-right: auto;

	& > :first-child {
		display: flex;
		align-items: center;
	}

	[class*='fa'] {
		margin-right: 1rem;
		color: ${mixins.opacity(appColors.udemyBlue, .5)};
	}
`;
const Title = styled.span`
	color: ${(props) => (props.preview ? appColors.udemyBlue : 'inherit')};
`;
const Summary = styled.div`
	margin-left: 2rem;
    color: ${appColors.greyDark1};
    font-size: 1.3rem;
`;
const PreviewButton = styled(ButtonText)`
	color: ${appColors.udemyBlue};
	margin-right: 3rem;

	&:hover,
	&:active,
	&:focus {
		color: ${mixins.lighten(appColors.udemyBlue)};
	}
`;

function getFoldedContentComponent(content) {
	return (
		<ul>
			{content.map((c, i) => {
				const key = i;
				return (
					<FoldedContent key={key}>
						<Leading>
							<div>
								<FontAwesomeIcon icon={faPlayCircle} size='xs' />
								<Title preview={c.preview}>{c.title}</Title>
							</div>
							{c.summary && <Summary>{c.summary}</Summary>}
						</Leading>
						{c.preview ? <PreviewButton>Preview</PreviewButton> : <div />}
						<span>{c.length}</span>
					</FoldedContent>
				);
			})}
		</ul>
	);
}

const List = styled.ul`
	background-color: ${appColors.white};

	h4 {
		margin: 0;
	}

	.item {
		display: grid;
		grid-template-columns: 1fr max-content 6rem;
		column-gap: 3rem;

		& > :last-child {
			text-align: right;
		}
	}
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;

	& > * {
		margin-right: 1.5rem;
	}

	h2:first-child {
		margin-right: auto;
	}

	button {
		color: ${appColors.udemyBlue};
	}
`;

export default function CourseSummaryList({ course }) {
	return (
		<div>
			<Header>
				<H2>Content</H2>
				<ButtonText type='button'>Expand all</ButtonText>
				<span>{`${course.totalVideo} lectures`}</span>
				<span>{course.videoLength}</span>
			</Header>
			<List>
				{course.summary.map((c, i) => {
					const key = i + 1;
					return (
						<UdemyFoldableListItem
							className='item'
							key={key}
							startOpen={i === 0}
							foldedContent={getFoldedContentComponent(c.videos)}
						>
							<H4>{c.title}</H4>
							<span>{`${c.videos.length} lectures`}</span>
							<span>{c.length}</span>
						</UdemyFoldableListItem>
					);
				})}
			</List>
		</div>
	);
}

CourseSummaryList.propTypes = {
	course: courseDetailProps.isRequired,
};
