import React, { useEffect } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { ThemeProvider } from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import Header from './components/Header';

import Home from './screens/Home';

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
					path="/header"
					component={() => <Header themeToggler={themeToggler} />}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
