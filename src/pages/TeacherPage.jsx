import React from 'react';
import Filters from '../layout/Filters';
import Pagination from '../components/Pagination';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import styled from '../styles';
import { englishBabes } from '../data/teachers';
import { SizedBox } from '../components/Common';
import TeacherGrid from '../components/TeacherGrid';

const Content = styled(ContentContainer)`
	margin-top: 3.6rem;
	margin-bottom: 7rem;
`;
const TeacherPage = () => (
	<main>
		<Breadcrumb path={[routes.home, routes.teacher]} />
		<Filters
			title='All Teachers'
			subTitle='There are more than 100 teachers here'
			isTeacherFilter
		/>
		<Content>
			<TeacherGrid list={englishBabes} />
			<SizedBox height={4} />
			<Pagination />
		</Content>
	</main>
);

export default TeacherPage;
