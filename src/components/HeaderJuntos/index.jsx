import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import { Container, HamburgerMenu, MainContainer, MenuArea } from './styles';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

import Hamburger from 'react-hamburger-menu';

import ThemeSwitch from '../ThemeSwitch';

import LogoSVG from '../../assets/melijuntos.svg';

function Header({ themeToggler }) {
	const context = useContext(ThemeContext);

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<MainContainer>
			<Container>
				<Link
					to="/"
					style={{ textDecoration: 'none', display: 'flex' }}
				>
					<Logo svg={LogoSVG} />
				</Link>
				<SearchBar />
				<HamburgerMenu
					element={Hamburger}
					isOpen={open}
					menuClicked={handleClick}
					strokeWidth={1}
					rotate={0}
					color={context.hamburger}
					borderRadius={0}
					width={25}
					height={20}
					animationDuration={0.5}
				/>
				<ThemeSwitch toggler={themeToggler} />
			</Container>
			{open && <MenuArea />}
		</MainContainer>
	);
}

export default Header;
