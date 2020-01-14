import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Content, ColumnLeft, ColumnRight } from './QuestionsPage';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Ads from '../components/Ads';
import QuestionListSideBar from '../components/QuestionListSideBar';
import Selector from '../components/Selector';
import { Line } from '../components/Common';
import Input, { InputGroup } from '../components/Input';
import Button from '../components/Buttons';
import { H2 } from '../components/Headings';
import ContentContainer from '../layout/ContentContainer';
import { questionProps } from '../utilities/proptypes';
import styled from '../styles';
import subjects from '../data/subjects';

const AskForm = styled(ColumnLeft)`
	display: flex;
	flex-direction: column;

	button {
		align-self: end;
	}
`;
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

function AskPage({ hotQuestions, newQuestions }) {
	const history = useHistory();
	const questionTitle = 'Enter question title';
	const questionBody = 'Enter question body';
	const [filter, setFilter] = React.useState(null);

	return (
		<>
			<Breadcrumb path={[routes.home, routes.question, 'Ask']} />
			<ContentContainer as='main'>
				<H2 className='mt-md mb-0'>Ask a new question</H2>
				<H2 sub className='mt-tn mb-sm'>
					Be specific and imagine you’re asking your dad for money
				</H2>
				<Line />
				<Content>
					<AskForm>
						<div className='bold mb-sm'>Title</div>
						<InputGroup className='mb-sm'>
							<Input
								type='text'
								placeholder={questionTitle}
								aria-label={questionTitle}
							/>
						</InputGroup>
						<div className='bold mb-sm'>Body</div>
						<InputGroup className='mb-sm'>
							<textarea
								type='text'
								placeholder={questionBody}
								aria-label={questionBody}
								rows={10}
							/>
						</InputGroup>
						<div className='bold mb-sm'>Subject</div>
						<Selector
							placeholder='Choose subject'
							value={filter}
							onChange={(selectedValue) =>
								setFilter(() => selectedValue)
							}
							options={subjectOptions}
						/>
						<Button
							type='button'
							className='bold mt-md'
							onClick={() => history.push('/questions')}
						>
							Post your question
						</Button>
					</AskForm>
					<ColumnRight>
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
					</ColumnRight>
				</Content>
			</ContentContainer>
		</>
	);
}

AskPage.propTypes = {
	hotQuestions: PropTypes.arrayOf(questionProps).isRequired,
	newQuestions: PropTypes.arrayOf(questionProps).isRequired,
};

const mapStateToProps = (state) => ({
	hotQuestions: Object.values(state.questions.hotQuestions),
	newQuestions: Object.values(state.questions.newQuestions),
});

export default connect(mapStateToProps, null)(AskPage);
