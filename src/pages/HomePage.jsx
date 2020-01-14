import React from 'react';
import { AnnouncementPageBuilder } from './AnnouncementPage';
import intro from '../data/intro';
import Intro from '../../public/images/intro.jpg';
import routes from '../routes';

const HomePage = () => (
	<AnnouncementPageBuilder
		path={[routes.home, routes.about]}
		title='About NearAcademy'
		image={Intro}
		body={intro}
	/>
);

export default HomePage;
