import users from './users';

const exerciseStanding = {
	exerciseId: '0001',
	standing: [
		{
			...users[0],
			rank: 1,
			score: 30,
			time: '6 mins 03 secs',
		},
		{
			...users[1],
			rank: 2,
			score: 30,
			time: '10 mins 30 secs',
		},
		{
			...users[2],
			rank: 3,
			score: 28,
			time: '12 mins 49 secs',
		},
		{
			...users[3],
			rank: 4,
			score: 28,
			time: '15 mins 33 secs',
		},
		{
			...users[4],
			rank: 5,
			score: 27,
			time: '14 mins 01 secs',
		},
		{
			...users[5],
			rank: 6,
			score: 25,
			time: '08 mins 52 secs',
		},
		{
			...users[6],
			rank: 7,
			score: 25,
			time: '18 mins 56 secs',
		},
		{
			...users[7],
			rank: 8,
			score: 23,
			time: '16 mins 12 secs',
		},
		{
			...users[8],
			rank: 9,
			score: 19,
			time: '09 mins 41 secs',
		},
		{
			...users[9],
			rank: 10,
			score: 6,
			time: '12 mins 20 secs',
		},
	],
};

export default exerciseStanding;
