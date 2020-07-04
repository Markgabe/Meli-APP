import React from 'react';
import styled from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import Header from './components/Header';
import Challenges from './screens/Challenges';
import Menu from './components/Menu';

const App = () => {
	const [theme, setTheme] = usePersistedState('light');
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	const Container = styled.div`
		display: grid;
		height: 100vh;
		width: 100vw;

		grid-template-areas:
			'Header'
			'Screen'
			'Menu';

		grid-template-rows: 60px auto 100px;
		grid-template-columns: 1fr;
	`;

	return (
		<ThemeProvider theme={theme === 'dark' ? light : dark}>
			<Container>
				<GlobalStyles />
				<Header themeToggler={themeToggler} />
				<Challenges />
				<Menu />
			</Container>
		</ThemeProvider>
	);
};

export default App;
