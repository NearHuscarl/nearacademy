import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Filters from '../layout/Filters';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import QuestionPreviewList from '../components/QuestionPreviewList';
import QuestionListSideBar from '../components/QuestionListSideBar';
import Tag from '../components/Tag';
import ContentContainer from '../layout/ContentContainer';
import Button from '../components/Buttons';
import { H3 } from '../components/Headings';
import { questionProps } from '../utilities/proptypes';
import styled, { helperStyles } from '../styles';

const QuestionPage = styled.main`
	margin-bottom: 7rem;
`;

export const Content = styled.div`
	display: flex;
	margin-top: 2.7rem;
	margin-bottom: 7rem;
`;

export const ColumnLeft = styled.div`
	margin-right: 2.6rem;
	width: 100%;
`;

export const ColumnRight = styled.div`
	width: 35rem;
	button {
		width: 100%;
		margin-bottom: 1.7rem;
	}
`;

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;

	& > :not(:last-child) {
		margin-right: 0.8rem;
	}
	& > * {
		margin-top: 0.8rem;
	}

	${helperStyles.marginBottomMedium}
`;

function QuestionsPage({ questions, hotQuestions, newQuestions }) {
	const history = useHistory();

	return (
		<QuestionPage>
			<Breadcrumb path={[routes.home, routes.question]} />
			<Filters
				title='All Questions'
				subTitle='There are more than 1900 questions here'
			/>
			<ContentContainer>
				<Content>
					<ColumnLeft>
						<QuestionPreviewList questions={questions} />
					</ColumnLeft>
					<ColumnRight>
						<Button
							type='button'
							className='bold mb-md'
							onClick={() => history.push('/questions/ask')}
						>
							Ask a new question
						</Button>
						<H3>Popular tags</H3>
						<Tags>
							<Tag>Python</Tag>
							<Tag>Vue</Tag>
							<Tag>Vimscript</Tag>
							<Tag>Flutter</Tag>
							<Tag>C#</Tag>
							<Tag>GameDev</Tag>
							<Tag>SQL</Tag>
						</Tags>
						<QuestionListSideBar
							title='Trending questions'
							questions={hotQuestions}
							className='mb-md'
						/>
						<QuestionListSideBar
							title='New questions'
							questions={newQuestions}
							className='mb-md'
						/>
						<Ads />
					</ColumnRight>
				</Content>
				<Pagination />
			</ContentContainer>
		</QuestionPage>
	);
}

QuestionsPage.propTypes = {
	questions: PropTypes.arrayOf(questionProps).isRequired,
	hotQuestions: PropTypes.arrayOf(questionProps).isRequired,
	newQuestions: PropTypes.arrayOf(questionProps).isRequired,
};

const mapStateToProps = (state) => ({
	questions: Object.values(state.questions.questions),
	hotQuestions: Object.values(state.questions.hotQuestions),
	newQuestions: Object.values(state.questions.newQuestions),
});

export default connect(mapStateToProps, null)(QuestionsPage);
