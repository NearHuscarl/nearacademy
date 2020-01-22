import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Input, { InputGroup } from '../components/Input';
import Button from '../components/Buttons';
import { Main, Container, Heading, SubHeading, InputHint } from './LoginPage';
import authImage from '../../public/images/auth.png';

export default function ForgotPasswordPage() {
	const history = useHistory();
	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.forgotPassword]} />
			<Container>
				<img src={authImage} alt='auth' />
				<Heading>Reset your password</Heading>
				<SubHeading>We will send a reset code to your recovery email to reset your password</SubHeading>
				<InputHint>Email</InputHint>
				<InputGroup>
					<Input placeholder='Your email address' />
				</InputGroup>
				<Button
					className='submit'
					type='button'
					onClick={() => history.push(routes.changePassword.path)}
				>
					Send Validation Code
				</Button>
			</Container>
		</Main>
	);
}
