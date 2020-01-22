import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Input, { InputGroup } from '../components/Input';
import Button, { ButtonText } from '../components/Buttons';
import Selector from '../components/Selector';
import { Main, Container, Heading, SubHeading, InputHint } from './LoginPage';
import authImage from '../../public/images/auth.png';
import styled from '../styles';
import provinces from '../data/provinces';
import schools from '../data/schools';

const provinceOptions = provinces.map((p) => ({
	label: p,
	value: p,
}));
const schoolOptions = schools.map((s) => ({
	label: s,
	value: s,
}));

const Select = styled(Selector)`
	text-align: left;
`;

export default function RegisterPage() {
	const history = useHistory();
	const [province, setProvince] = React.useState(provinceOptions[0]);
	const [school, setSchool] = React.useState(schoolOptions[0]);

	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.register]} />
			<Container>
				<img src={authImage} alt='auth' />
				<Heading>Register</Heading>
				<SubHeading>
					To access to all available features from NearAcademy
				</SubHeading>
				<InputHint>Name</InputHint>
				<InputGroup>
					<Input placeholder='Your name' />
				</InputGroup>
				<InputHint>Full name</InputHint>
				<InputGroup>
					<Input placeholder='Your full name' />
				</InputGroup>
				<InputHint>Email</InputHint>
				<InputGroup>
					<Input placeholder='Your email address' />
				</InputGroup>
				<InputHint>Province</InputHint>
				<Select
					value={province}
					onChange={(value) => setProvince(() => value)}
					options={provinceOptions}
				/>
				<InputHint>School</InputHint>
				<Select
					value={school}
					onChange={(value) => setSchool(() => value)}
					options={schoolOptions}
				/>
				<InputHint>Password</InputHint>
				<InputGroup>
					<Input type='password' placeholder='Your password' />
				</InputGroup>
				<InputHint>Confirm password</InputHint>
				<InputGroup>
					<Input type='password' placeholder='Your confirm password' />
				</InputGroup>
				<Button
					className='submit'
					type='button'
					onClick={() => history.push(routes.home.path)}
				>
					Register
				</Button>
				<div>
					<span>Have an account? </span>
					<span>Login </span>
					<ButtonText
						className='register'
						type='button'
						onClick={() => history.push(routes.login.path)}
					>
						here
					</ButtonText>
				</div>
			</Container>
		</Main>
	);
}
