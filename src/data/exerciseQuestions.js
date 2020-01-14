import sample from 'lodash/sample';
import { randomBetween, randomBetweenInt } from '../utilities/random';

const answerDetails = [
	'Natural gas,coal seam gas and sediment on ocean floors are all non-renewable.',
	'Human’s don’t have the cellulaseenzyme and hence can’t digestcellulose',
	'Hydrolysis of polysaccharideseventually yield monosaccharides such as glucose, C6H12O6',
	'The primary structure links the amino acid residues via strong covalent bonds known as peptide bonds',
	'Low accuracy –values not close to real manufacturer’s valueHigh precision –values are close together.',
	'n(H2S) = 3 x n(Al2S3) = 3 x 0.200 = 0.600 molVSLC(H2S) = n x VM(SLC)= 0.600 x 24.8 = 14.9 LD14.7 Lis the closest answerRefer to Data Booklet p5 for molar volume of an ideal gas at SLC and SLC conditions.',
	'Controlled variables are all the variables that must be kept constant during the investigation',
	'At pH = 13 (basic) Both -NH3+and –COOH will act as acids and loose an H+Hence: -NH3+willbecome -NH2and -COOH will become -COO',
];
const sampleQuestions = [
	{
		question: 'During oxidation process electrons are',
		answers: ['Lost', 'Gained', 'Paired up', 'remains same'],
		answerDetail: sample(answerDetails),
	},
	{
		question:
			'The process of heating the concentrated ore in a limited supply of air or in the absence of air is known as:',
		answers: ['Roasting', 'Leaching', 'Calcination', 'Cupellation'],
		answerDetail: sample(answerDetails),
	},
	{
		question:
			'Which one of the following Vitamins is essential for coagulation of Blood?',
		answers: ['K', 'C', 'A', 'B1'],
		answerDetail: sample(answerDetails),
	},
	{
		question: 'What is the source of UV radiation?',
		answers: [
			'Hydrogen gas discharge lamp',
			'RF oscillator',
			'Klystron oscillator',
			'Nernst Filament',
		],
		answerDetail: sample(answerDetails),
	},
	{
		question: 'Which transitions are studied by UV spectrometer?',
		answers: ['Rotational', 'Electronic', 'Nuclear', 'Vibrational'],
		answerDetail: sample(answerDetails),
	},
	{
		question:
			'The structure of sulphur dioxide molecule (SO2) may be given as:',
		answers: ['Tetrahedral', 'Bent', 'Linear', 'Plane triangle'],
		answerDetail: sample(answerDetails),
	},
	{
		question: 'An SN1 reaction results in:',
		answers: ['Retention', 'Racemisation', 'Inversion', 'Elimination'],
		answerDetail: sample(answerDetails),
	},
	{
		question: 'Which of the following is not true for zero order reaction?',
		answers: [
			'Rate = Rate constant',
			'Rate is independent of concentrations',
			'Rate does not change with time',
			'Rate increase with increase in concentrations',
		],
		answerDetail: sample(answerDetails),
	},
	{
		question:
			'The cell in which electrical energy is converted to chemical energy is:',
		answers: [
			'Galvanic cell',
			'Voltaic cell',
			'Electrolytic cell',
			'Electrochemical cell',
		],
		answerDetail: sample(answerDetails),
	},
];
const randomQuestion = () => sample(sampleQuestions);

const answersPerQuestion = 4;
let currentAnswer = 1;
let percentChanceLeft = 1;

function clamp(n, min, max) {
	return Math.min(Math.max(n, min), max);
}

const randomAnswer = () => randomBetweenInt(0, 3);
const randomUserAnswer = () => randomBetweenInt(-1, 3);
const randomAnswerPercentage = () => {
	if (currentAnswer % answersPerQuestion === 0) {
		const answerPercentChance = percentChanceLeft;
		percentChanceLeft = 1;
		currentAnswer = 1;
		return clamp(answerPercentChance, 0, 1);
	}

	const answerPercentChance = randomBetween(0, percentChanceLeft * 100) / 100;
	percentChanceLeft -= answerPercentChance;
	currentAnswer += 1;

	return clamp(answerPercentChance, 0, 1);
};

const createQuestion = ({ question, answers, answerDetail }) => ({
	question,
	answer: randomAnswer(),
	userAnswer: randomUserAnswer(),
	answers: [
		{
			text: answers[0],
			percentage: randomAnswerPercentage(),
		},
		{
			text: answers[1],
			percentage: randomAnswerPercentage(),
		},
		{
			text: answers[2],
			percentage: randomAnswerPercentage(),
		},
		{
			text: answers[3],
			percentage: randomAnswerPercentage(),
		},
	],
	answerDetail,
});

const questions = [];
for (let i = 0; i < 30; i += 1) {
	questions.push({
		...createQuestion(randomQuestion()),
		id: 'EQ' + (i + 1).toString().padStart(5, 0),
	});
}

export default questions;
