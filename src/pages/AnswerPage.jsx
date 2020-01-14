import React from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Ads from '../components/Ads';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Pagination from '../components/Pagination';
import QuestionListSideBar from '../components/QuestionListSideBar';
import Tag, { TagGroup } from '../components/Tag';
import ContentContainer from '../layout/ContentContainer';
import QaProfile from '../components/QaProfile';
import { SizedBox, Line } from '../components/Common';
import Button, { ButtonText } from '../components/Buttons';
import { H2, H3 } from '../components/Headings';
import Selector from '../components/Selector';
import { questionProps } from '../utilities/proptypes';
import styled, { appColors, theme } from '../styles';
import answers from '../data/answers';
import { questions } from '../data/questions';
import UpvoteScore from '../components/UpvoteScore';
import timeSince from '../utilities/timeSince';
import { Column, ColumnContainer } from '../layout/Column';

const FlexContainer = styled.div`
	display: flex;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: -1rem;

	button {
		align-self: center;
		font-weight: bold;
	}
`;
const Description = styled.div`
	white-space: pre-wrap;
`;
const Side = styled.div`
	flex: 0 0 7rem;
	margin-right: 1.9rem;
	display: flex;
	justify-content: center;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Tags = styled(TagGroup)`
	margin: 0.5rem 0 1.5rem 0;
`;

const Main = styled.div`
	width: 100%;
`;

const QaButtonText = styled(ButtonText)`
	font-size: 1rem;
	display: block;
	color: ${appColors.greyDark1};

	:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const FilterGroup = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
	margin-bottom: 2rem;
`;
const UserTag = styled(Tag)`
	color: ${appColors.lightBlue};
`;
const Comment = styled.div`
	display: flex;
	align-items: center;
	padding-left: 1.25rem;

	& > :not(:last-child) {
		margin-right: 1rem;
	}

	.date {
		font-size: 1rem;
	}
`;
const CommentButton = styled(QaButtonText)`
	padding-left: 1.25rem;
`;

const RichEditor = styled(RichTextEditor)`
	.DraftEditor-root {
		min-height: 12rem;
		font-family: ${theme.displayFont};
		font-size: 1.2rem;
	}

	[class*='IconButton__icon'] {
		/* change button background image from hard black to grey */
		filter: opacity(60%);
	}
`;

const options = [
	{ value: 'most_related', label: 'Most related' },
	{ value: 'newest', label: 'Newest' },
];

function AnswerPage({ hotQuestions, newQuestions }) {
	const history = useHistory();
	const question = questions.Q00001;
	const [filter, setFilter] = React.useState(options[0]);

	return (
		<>
			<Breadcrumb path={[routes.home, routes.question, question.title]} />
			<ContentContainer as='main'>
				<Header>
					<div>
						<H2 className='mt-md mb-0'>{question.title}</H2>
						<H2 sub className='mt-tn mb-sm'>
							{`Subject: ${question.subject} - Views: ${question.views}`}
						</H2>
					</div>
					<Button
						type='button'
						onClick={() => history.push('/questions/ask')}
					>
						Ask a new question
					</Button>
				</Header>
				<Line />
				<ColumnContainer>
					<Column>
						<FlexContainer>
							<Side>
								<UpvoteScore score={question.votes} />
							</Side>
							<Main>
								<div>
									<Description>{question.description}</Description>
									<Tags>
										{question.tags.map((t) => (
											<Tag key={t}>{t}</Tag>
										))}
									</Tags>
								</div>
								<Bottom>
									<div>
										<QaButtonText>Edit this question</QaButtonText>
										<QaButtonText>Add comment</QaButtonText>
									</div>
									<QaProfile
										user={question.user}
										date={question.date}
									/>
								</Bottom>
							</Main>
						</FlexContainer>
						<SizedBox height={3} />
						<FilterGroup>
							<H3>2 Answers</H3>
							<Selector
								width={14}
								value={filter}
								onChange={(selectedValue) =>
									setFilter(() => selectedValue)
								}
								options={options}
							/>
						</FilterGroup>
						{answers.map((a, index) => (
							<>
								<FlexContainer>
									<Side>
										<UpvoteScore
											score={a.votes}
											accepted={a.accepted}
										/>
									</Side>
									<Main>
										<Description>{a.description}</Description>
										<Bottom>
											<QaButtonText>Edit this answer</QaButtonText>
											<QaProfile user={a.user} date={a.date} />
										</Bottom>
										{a.comments.length > 0 && (
											<>
												<SizedBox height={1} />
												<Line />
											</>
										)}
										{a.comments.map((c) => (
											<>
												<Comment>
													<div>{c.content}</div>
													<UserTag>{c.user.name}</UserTag>
													<div className='date'>
														{timeSince(new Date(c.date)) +
															' ago'}
													</div>
												</Comment>
												<Line />
											</>
										))}
										<CommentButton>Add comment</CommentButton>
									</Main>
								</FlexContainer>
								{index !== answers.length - 1 && <Line small />}
							</>
						))}
						<SizedBox height={4} />
						<Pagination />
						<SizedBox height={5} />
						<H3>Your Answer</H3>
						<RichEditor
							value={RichTextEditor.createEmptyValue()}
							placeholder='Enter your answer...'
						/>
					</Column>
					<Column width='22rem'>
						<QuestionListSideBar
							title='Most related'
							questions={hotQuestions}
							className='mb-md'
						/>
						<QuestionListSideBar
							title='Trending questions'
							questions={hotQuestions}
							className='mb-md'
						/>
						<QuestionListSideBar
							title='Newest questions'
							questions={newQuestions}
							className='mb-md'
						/>
						<Ads />
					</Column>
				</ColumnContainer>
			</ContentContainer>
			<SizedBox height={5} />
		</>
	);
}

AnswerPage.propTypes = {
	hotQuestions: PropTypes.arrayOf(questionProps).isRequired,
	newQuestions: PropTypes.arrayOf(questionProps).isRequired,
};

const mapStateToProps = (state) => ({
	hotQuestions: Object.values(state.questions.hotQuestions),
	newQuestions: Object.values(state.questions.newQuestions),
});

export default connect(mapStateToProps, null)(AnswerPage);
