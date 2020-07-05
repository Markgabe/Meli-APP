import React, { useEffect } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { ThemeProvider } from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import Home from './screens/Home';
import MercadoJuntosHome from './screens/MercadoJuntosHome';
import Store from './screens/Store';

const App = () => {
	const [theme, setTheme] = usePersistedState('light');
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={theme === 'light' ? light : dark}>
			<GlobalStyles />
			<BrowserRouter>
				<Route
					exact
					path="/"
					component={() => <Home toggle={themeToggler} />}
				/>
				<Route
					exact
					path="/mercadojuntos"
					component={() => (
						<MercadoJuntosHome toggle={themeToggler} />
					)}
				/>
				<Route
					exact
					path="/mercadojuntos/store"
					component={() => <Store toggle={themeToggler} />}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
