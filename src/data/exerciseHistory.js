import { randomBetweenInt } from '../utilities/random';

const randomTime = () =>
	`${randomBetweenInt(0, 59)} mins ${randomBetweenInt(0, 59)} secs`;
const randomScore = () => `${randomBetweenInt(0, 30)}/30`;

const exerciseHistory = [
	{
		timeTaken: '15/10/2019 10:20:00',
		score: randomScore(),
		time: randomTime(),
	},
	{
		timeTaken: '14/10/2019 08:51:00',
		score: randomScore(),
		time: randomTime(),
	},
];

export default exerciseHistory;
