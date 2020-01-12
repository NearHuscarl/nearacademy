import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import ExerciseCarousel from '../components/ExerciseCarousel';
import { exerciseProps, exerciseRankProps } from '../utilities/proptypes';
import ExercisePreviewSection from '../components/ExercisePreviewSection';
import ScoreCard from '../components/ScoreCard';
import { SizedBox } from '../components/Common';
import { H4 } from '../components/Headings';
import TeacherDetail from '../components/TeacherDetail';
import Breadcrumbs, { routes } from '../components/Breadcrumb';
import ContentContainer from '../layout/ContentContainer';
import ExerciseStanding from '../components/ExerciseStanding';
import styled, { helperStyles } from '../styles';
import { chemistryTeacher } from '../data/teachers';
import ExerciseHistory from '../components/ExerciseHistory';
import exerciseHistory from '../data/exerciseHistory';
import { getExercise } from '../store/storeHelper';

const Content = styled.div`
	${helperStyles.marginTopLarge}

	.tabs {
		margin-top: 2rem;
	}

	margin-bottom: 7rem;
`;
const Top = styled.div`
	display: flex;

	& > :last-child {
		flex: 1 0 auto;
		margin-left: 3.5rem;
	}
`;
const SubHeader = styled(H4)`
	flex: 0 0 100%;
	margin-top: 1.6rem;
`;

function ExercisePreviewPage({
	exercise,
	standing,
	chemistryExercises,
	nationalExams,
}) {
	return (
		<>
			<Breadcrumbs path={[routes.home, routes.exercise, exercise.title]} />
			<ContentContainer as='main'>
				<Content>
					<Top>
						<div>
							<ExercisePreviewSection exercise={exercise} />
							<SubHeader>Giới thiệu chung</SubHeader>
							<div>{exercise.description}</div>
						</div>
						<ScoreCard />
					</Top>
					<Tabs className='tabs'>
						<TabList>
							<Tab>Bảng xếp hạng</Tab>
							<Tab>Lịch sử làm bài</Tab>
						</TabList>
						<TabPanel>
							<ExerciseStanding list={standing.slice(0, 4)} />
						</TabPanel>
						<TabPanel>
							<ExerciseHistory list={exerciseHistory} />
						</TabPanel>
					</Tabs>
					<SizedBox height={3} />
					<TeacherDetail teacher={chemistryTeacher} />
					<SizedBox height={3} />
					<ExerciseCarousel
						list={chemistryExercises}
						title='Các bài tập có liên quan'
					/>
					<ExerciseCarousel
						list={nationalExams}
						title='Các bài tập nổi bật'
					/>
					<ExerciseCarousel
						list={nationalExams}
						title='Các bài tập mới nhất'
					/>
				</Content>
			</ContentContainer>
		</>
	);
}

ExercisePreviewPage.propTypes = {
	exercise: exerciseProps.isRequired,
	standing: PropTypes.arrayOf(exerciseRankProps).isRequired,
	chemistryExercises: PropTypes.arrayOf(exerciseProps).isRequired,
	nationalExams: PropTypes.arrayOf(exerciseProps).isRequired,
};

const mapStateToProps = (state, props) => ({
	exercise: getExercise(state, props.match.params.id),
	standing: state.exerciseStanding['0001'],
	chemistryExercises: Object.values(state.exercises.chemistry),
	nationalExams: Object.values(state.exercises.examGeography),
});

export default connect(mapStateToProps, null)(ExercisePreviewPage);
