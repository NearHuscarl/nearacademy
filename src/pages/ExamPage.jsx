import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filters from '../layout/Filters';
import { ExercisePageBuilder } from './ExercisePage';
import routes from '../routes';
import { exerciseProps, rankProps } from '../utilities/proptypes';

const ExamPage = ({
	exams,
	recommendedExams,
	standing,
	monthlyStanding,
	weeklyStanding,
}) => (
	<ExercisePageBuilder
		path={[routes.home, routes.exam]}
		exercises={exams}
		recommends={[recommendedExams, recommendedExams]}
		standing={standing}
		monthlyStanding={monthlyStanding}
		weeklyStanding={weeklyStanding}
		filter={
			<Filters
				title='All Exams'
				subTitle='There are more than 300 exams here'
			/>
		}
	/>
);

ExamPage.propTypes = {
	standing: PropTypes.arrayOf(rankProps).isRequired,
	monthlyStanding: PropTypes.arrayOf(rankProps).isRequired,
	weeklyStanding: PropTypes.arrayOf(rankProps).isRequired,
	exams: PropTypes.arrayOf(exerciseProps).isRequired,
	recommendedExams: PropTypes.arrayOf(exerciseProps).isRequired,
};

const mapStateToProps = (state) => ({
	standing: state.standings.standing.slice(0, 5),
	monthlyStanding: state.standings.monthlyStanding.slice(0, 5),
	weeklyStanding: state.standings.weeklyStanding.slice(0, 5),
	exams: Object.values(state.exercises.examChemistry),
	recommendedExams: Object.values(state.exercises.examGeography),
});

export default connect(mapStateToProps, null)(ExamPage);
