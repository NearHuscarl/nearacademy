import { randomUser } from './users';

const commenter = randomUser();
const commenter2 = randomUser();
const commenter3 = randomUser();

const comments = [
	{
		avatar: commenter.avatar,
		user: commenter.name,
		userId: commenter.id,
		date: '30 minutes ago',
		content: 'Your solution is very good',
		replies: [
			{
				avatar: commenter2.avatar,
				user: commenter2.name,
				userId: commenter2.id,
				date: '31 minutes ago',
				content: "No it's not",
				isReply: true,
			},
			{
				avatar: commenter.avatar,
				user: commenter.name,
				userId: commenter.id,
				date: '33 minutes ago',
				content: 'your mom',
				isReply: true,
			},
		],
	},
	{
		avatar: commenter3.avatar,
		user: commenter3.name,
		userId: commenter3.id,
		date: '35 minutes ago',
		content:
			"Don't mind me. just an underpaid defloper testing in production",
		replies: [],
	},
];

export default comments;
