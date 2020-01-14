import users from './users';
import { randomDateFromNow } from '../utilities/random';

const randomDateInDay = () =>
	randomDateFromNow({ dayStart: -2, dayEnd: 0 }).toISOString();

const answers = [
	{
		votes: 0,
		description: `It won't be true if x is NaN, since comparisons on NaN are always false (yes, even NaN == NaN). For all other cases (normal values, subnormal values, infinities, zeros) this assertion will be true.

The advice for avoiding == for floats applies to calculations due to floating point numbers being unable to express many results exactly when used in arithmetic expressions. Assignment is not a calculation and there's no reason that assignment would yield a different value than the original.`,
		accepted: true,
		user: users[0],
		date: randomDateInDay(),
		comments: [
			{
				content: 'Thank you very much!',
				user: users[2],
				date: randomDateInDay(),
			},
		],
	},
	{
		votes: 2,
		description:
			'Why not just google it and click on the first result you find?',
		accepted: false,
		user: users[1],
		date: randomDateInDay(),
		comments: [
			{
				content: "I didn't know that, thank you",
				user: users[2],
				date: randomDateInDay(),
			},
			{
				content: '@69ers No problem',
				user: users[1],
				date: randomDateInDay(),
			},
		],
	},
];

export default answers;
