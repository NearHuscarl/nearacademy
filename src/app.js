/* eslint react/jsx-filename-extension: off */

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/main.scss';

const commitHash = (
	<div className='commit-hash'>
		{process.env.COMMIT_SHA}
	</div>
);

const renderApp = () => {
	ReactDOM.render(
		<div className='page-container'>
			<AppRouter />
			{commitHash}
		</div>,
		document.getElementById('app'),
	);
};

renderApp();
