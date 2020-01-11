import sample from 'lodash/sample';
import users, { activeUser } from './users';
import logo from '../../public/images/logo.png';

const usersWithoutActiveUser = users.filter((u) => u.id !== activeUser.name);
const randomUser = () => sample(usersWithoutActiveUser);

const user1 = randomUser();
const user2 = randomUser();

const notifications = [
	{
		image: user1.avatar,
		body: `[${user1.id}] đã trả lời câu hỏi của bạn`,
		date: '20 phút trước',
	},
	{
		image: user2.avatar,
		body: `[${user2.id}] đã trả lời câu hỏi của bạn`,
		date: '21 phút trước',
	},
	{
		image: logo,
		body:
			'[NearAcademy] giảm giá 50% tất cả khóa học chỉ 2 ngày 01/11 và 02/11/2019',
		date: '5 ngày trước',
	},
	{
		image: logo,
		body: '[NearAcademy] giảm 30% tất cả các khóa học chỉ 2 ngày 22/10 và 23/10',
		date: '1 tháng trước',
	},
	{
		image: logo,
		body:
			'Mua 1 khóa học tặng 1 khóa học duy nhất trên [NearAcademy] trong năm 2019',
		date: '4 tháng trước',
	},
	{
		image: logo,
		body:
			'[NearAcademy] giảm giá 50% tất cả khóa học chỉ 2 ngày 15/7 và 16/7/2019',
		date: '4 tháng trước',
	},
];

export default notifications;
