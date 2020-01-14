import React from 'react';
import PropTypes from 'prop-types';
import Tag, { TagGroup } from './Tag';
import { Link, Line, EllipsisButton } from './Common';
import QaProfile from './QaProfile';
import { H3 } from './Headings';
import { questionProps } from '../utilities/proptypes';
import styled, { helperStyles } from '../styles';

const ListItem = styled.article`
	display: flex;
	position: relative;
`;
const Side = styled.div`
	text-align: center;
	flex: 0 0 7rem;
	margin-right: 1.9rem;
`;
const SideNumber = styled.div`
	font-size: 1.6rem;
`;
const SideText = styled.div`
	font-size: 1.2rem;
`;
const SideSubtext = styled.div`
	font-size: 1rem;
`;

const Subject = styled.div`
	font-weight: 600;
	${helperStyles.marginBottomTiny}
`;
const Description = styled.div`
	${helperStyles.marginBottomSmall}
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const More = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

function QuestionPreviewListItem({ question }) {
	const {
		votes,
		answers,
		views,
		title,
		subject,
		description,
		tags,
		date,
		user,
	} = question;
	return (
		<ListItem>
			<Side>
				<SideNumber>{votes.toLocaleString()}</SideNumber>
				<SideText>Votes</SideText>
				<SideNumber>{answers}</SideNumber>
				<SideText>Answers</SideText>
				<SideSubtext>{`${views.toLocaleString()} views`}</SideSubtext>
			</Side>
			<div>
				<H3>
					<Link to='/questions/001'>{title}</Link>
				</H3>
				<Subject>{subject}</Subject>
				<Description>{description}</Description>
				<Bottom>
					<TagGroup>
						{tags.map((t) => (
							<Tag key={t}>{t}</Tag>
						))}
					</TagGroup>
					<QaProfile user={user} date={date} />
				</Bottom>
			</div>
			<More>
				<EllipsisButton />
			</More>
		</ListItem>
	);
}

QuestionPreviewListItem.propTypes = {
	question: questionProps.isRequired,
};

export default function QuestionPreviewList({ questions }) {
	return (
		<section>
			{questions.map((q, index) => {
				return (
					<React.Fragment key={q.id}>
						<QuestionPreviewListItem question={q} />
						{index !== questions.length - 1 ? <Line large /> : null}
					</React.Fragment>
				);
			})}
		</section>
	);
}

QuestionPreviewList.propTypes = {
	questions: PropTypes.arrayOf(questionProps).isRequired,
};
