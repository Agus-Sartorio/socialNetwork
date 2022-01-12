import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewUser from './components/NewUser';
import Login from './components/Login';
import Users from './components/Users';
import Provider from './context/Provider';

ReactDOM.render(
	<React.StrictMode>
		<Provider>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<Users />} />
					<Route path={'/register'} element={<NewUser />} />
					<Route path={'/login'} element={<Login />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
