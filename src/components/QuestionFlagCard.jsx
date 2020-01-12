import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import { WhiteButton } from './Buttons';
import { H4 } from './Headings';
import { setExerciseQuestionFlag } from '../actions/exerciseQuestions';
import styled, { appColors, curves, helperStyles } from '../styles';

const Container = styled(Card)`
	position: relative;

	h4 {
		margin-bottom: 0;
	}

	h4 + span {
		${helperStyles.marginBottomSmall}
	}

	button {
		width: 11.2rem;
	}
`;

const flagSize = '2.3rem';
const Flag = styled.div`
	position: absolute;
	top: calc(-${flagSize} / 4);
	right: calc(-${flagSize} / 4);

	border-radius: 50%;
	background-color: ${appColors.primary};
	color: ${appColors.white};

	width: ${flagSize};
	height: ${flagSize};
	display: flex;
	justify-content: center;
	align-items: center;

	transition: opacity 0.6s, transform 0.3s ${curves.easeInBack};
	transform: scale(0);
	opacity: 0;

	${(props) =>
		props.flagged
			? `
		opacity: 1;
		transform: scale(1);
		transition: opacity 0.3s, transform 0.3s ${curves.easeOutBack};`
			: `
		opacity: 0;
		transition: opacity 0.6s, transform 0.3s ${curves.easeInBack};
		transform: scale(0);`}
`;

// eslint-disable-next-line no-shadow
function QuestionFlagCard({ id, index, flag, answer, setExerciseQuestionFlag }) {
	return (
		<Container>
			<H4>Câu hỏi {index + 1}</H4>
			<span>{answer === -1 ? 'Chưa trả lời' : 'Đã trả lời'}</span>
			<WhiteButton
				type='button'
				onClick={() => {
					setExerciseQuestionFlag(id, !flag);
				}}
			>
				{flag ? 'Bỏ đặt cờ' : 'Đặt cờ'}
			</WhiteButton>
			<Flag flagged={flag}>
				<FontAwesomeIcon icon={faFlag} />
			</Flag>
		</Container>
	);
}

QuestionFlagCard.propTypes = {
	id: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	flag: PropTypes.bool.isRequired,
	answer: PropTypes.number.isRequired,
	setExerciseQuestionFlag: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setExerciseQuestionFlag: (id, flag) => dispatch(setExerciseQuestionFlag(id, flag)),
});

export default connect(null, mapDispatchToProps)(QuestionFlagCard);
