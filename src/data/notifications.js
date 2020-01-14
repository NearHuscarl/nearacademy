import sample from 'lodash/sample';
import users, { activeUser } from './users';
import logo from '../../public/images/logo.png';

const usersWithoutActiveUser = users.filter((u) => u.id !== activeUser.name);
const randomUser = () => sample(usersWithoutActiveUser);

const user1 = randomUser();
const user2 = randomUser();

const notifications = [
	{
		image: user2.avatar,
		body: `[${user2.id}] has liked your answer`,
		date: '20 minutes ago',
	},
	{
		image: user1.avatar,
		body: `[${user1.id}] has replied to your answer`,
		date: '21 minutes ago',
	},
	{
		image: logo,
		body:
			'[NearAcademy] discount 50% on all courses in only 2 days from 01/11 to 02/11/2019',
		date: '5 days ago',
	},
	{
		image: logo,
		body:
			'[NearAcademy] discount 30% on all courses in only 2 days from 22/10 to 23/10',
		date: '1 month ago',
	},
	{
		image: logo,
		body: 'Buy one get one free course on [NearAcademy] in 2019',
		date: '4 month ago',
	},
	{
		image: logo,
		body:
			'[NearAcademy] discount 50% on all courses in only 2 days from 15/7 to 16/7/2019',
		date: '4 month ago',
	},
];

export default notifications;
