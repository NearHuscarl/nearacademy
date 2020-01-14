import React from 'react';
import Filters from '../layout/Filters';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import CourseList from '../components/CourseList';
import Pagination from '../components/Pagination';
import ContentContainer from '../layout/ContentContainer';
import styled from '../styles';
import courses from '../data/courses';

const Main = styled.main`
	margin-bottom: 7rem;
`;
const Content = styled.div`
	margin-top: 3.6rem;
	margin-bottom: 4.1rem;
`;

const CoursesPage = () => (
	<Main>
		<Breadcrumb path={[routes.home, routes.courses]} />
		<Filters
			title='All Courses'
			subTitle='There are more than 300 courses here'
		/>
		<ContentContainer>
			<Content>
				<CourseList courses={courses} />
			</Content>
			<Pagination />
		</ContentContainer>
	</Main>
);

export default CoursesPage;
