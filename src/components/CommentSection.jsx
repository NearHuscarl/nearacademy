/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';
import Selector from './Selector';
import { setExerciseResultComment } from '../actions/exerciseResult';
import { commentProps } from '../utilities/proptypes';
import styled, { appColors, helperStyles } from '../styles';
import { InputGroup } from './Input';
import { H3 } from './Headings';
import Button, { ButtonLink } from './Buttons';
import { Link } from './Common';
import routes from '../routes';

const CommentContainer = styled.div`
	display: flex;
`;
const CommentPadding = styled.div`
	width: 5.5rem;
`;

const CommentContent = styled(Card)`
	display: flex;
	/* override bs */
	flex-direction: row;
	flex: 1;
`;
const CommentProfile = styled.img`
	width: 3.6rem;
	height: 3.6rem;
	border-radius: 50%;
	object-fit: cover;
	object-position: center;
	margin-right: 1.2rem;
	cursor: pointer;
`;
const CommentTop = styled.div`
	display: flex;
	align-items: baseline;
`;
const CommentUser = styled(Link)`
	margin-right: 1.2rem;
`;
const CommentDate = styled.div`
	font-size: 1rem;
`;
const CommentBody = styled.div`
	margin-bottom: 0.2rem;
	font-size: 1.2rem;
	color: ${appColors.greyDark2};
	[reply='true'] {
		margin-right: 5.5rem;
	}
`;
const CommentAction = styled.div`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	column-gap: 0.8rem;
	font-size: 0.9rem;
`;

function Comment({ comment, isReply }) {
	const { avatar, user, userId, date, content } = comment;
	return (
		<CommentContainer>
			{isReply && <CommentPadding />}
			<CommentContent background='white'>
				<CommentProfile src={avatar} alt='user avatar' />
				<div>
					<CommentTop>
						<CommentUser to={`${routes.profile.path}/${userId}`}>
							{user}
						</CommentUser>
						<CommentDate>{date}</CommentDate>
					</CommentTop>
					<CommentBody>{content}</CommentBody>
					<CommentAction>
						<ButtonLink type='button'>Like</ButtonLink>
						<ButtonLink type='button'>Reply</ButtonLink>
					</CommentAction>
				</div>
			</CommentContent>
		</CommentContainer>
	);
}

Comment.propTypes = {
	comment: commentProps.isRequired,
	isReply: PropTypes.bool.isRequired,
};

const CommentSectionContainer = styled(Card)`
	display: flex;
`;
const CommentFilterGroup = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem 0;
`;
const SubmitButton = styled(Button)`
	min-width: 8.4rem;
	align-self: end;
	${helperStyles.marginBottomTiny}
`;
const CommentGroup = styled.div`
	display: grid;
	row-gap: 1rem;
`;

const options = [
	{ value: 'most_related', label: 'Most related' },
	{ value: 'newest', label: 'Newest' },
];

function getCommentCount(comments) {
	const commentCount = comments.length;
	const replyCount = comments
		.map((c) => c.replies.length)
		.reduce((a, b) => a + b, 0);

	return commentCount + replyCount;
}

function CommentSection({ comments }) {
	const [filter, setFilter] = useState(options[0]);
	const commentLabel = 'Enter your comment...';
	const commentCount = getCommentCount(comments);

	return (
		<CommentSectionContainer>
			<InputGroup className='mb-sm'>
				<textarea
					type='text'
					placeholder={commentLabel}
					aria-label={commentLabel}
				/>
			</InputGroup>
			<SubmitButton type='button'>Comment</SubmitButton>
			<CommentFilterGroup>
				<H3>{`${commentCount} ${
					commentCount > 1 ? 'comments' : 'comment'
				}`}</H3>
				<Selector
					width={14}
					value={filter}
					onChange={(selectedValue) => setFilter(() => selectedValue)}
					options={options}
				/>
			</CommentFilterGroup>
			<CommentGroup>
				{comments.map((c) => {
					const commentComponents = [];

					commentComponents.push(
						<Comment key={c.user + c.date} comment={c} isReply={false} />,
					);

					c.replies.forEach((r) =>
						commentComponents.push(
							<Comment key={r.user + r.date} comment={r} isReply />,
						),
					);

					return commentComponents;
				})}
			</CommentGroup>
		</CommentSectionContainer>
	);
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(commentProps).isRequired,
};

const mapStateToProps = (state) => ({
	comments: state.exerciseResult.comments,
});

const mapDispatchToProps = (dispatch) => ({
	setExerciseResultComment: (comment) =>
		dispatch(setExerciseResultComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
