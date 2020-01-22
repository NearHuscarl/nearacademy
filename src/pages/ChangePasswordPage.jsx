import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Input, { InputGroup } from '../components/Input';
import Button from '../components/Buttons';
import { Main, Container, Heading, SubHeading, InputHint } from './LoginPage';
import authImage from '../../public/images/auth.png';

export default function ChangePasswordPage() {
	const history = useHistory();
	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.changePassword]} />
			<Container>
				<img src={authImage} alt='auth' />
				<Heading>Reset Password</Heading>
				<SubHeading>Set a new password for your account</SubHeading>
				<InputHint>New password</InputHint>
				<InputGroup>
					<Input
						type='password'
						placeholder='Your new password'
					/>
				</InputGroup>
				<InputHint>Confirm new password</InputHint>
				<InputGroup>
					<Input
						type='password'
						placeholder='Your confirm new password'
					/>
				</InputGroup>
				<Button
					className='submit'
					type='button'
					onClick={() => history.push(routes.home.path)}
				>
					Reset Password
				</Button>
			</Container>
		</Main>
	);
}
