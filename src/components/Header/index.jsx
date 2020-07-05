import React from 'react';

import { Container, Menu } from './styles';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

import ThemeSwitch from '../ThemeSwitch';

import LogoSVG from '../../assets/meliamarelo.svg';

function Header({ themeToggler }) {
	return (
		<Container>
			<Logo svg={LogoSVG} />
			<SearchBar />
			<Menu />
			<ThemeSwitch toggler={themeToggler} />
		</Container>
	);
}

export default Header;
