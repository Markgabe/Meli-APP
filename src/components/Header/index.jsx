import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'

import Switch from "react-switch";

import { Container, Coin, Amount, Rank, RankNumber, SwitchContainer } from './styles';
import Logo from '../Logo';

import LogoSVG from '../../assets/melijuntos.svg';

function Header({ themeToggler }) {
	const context = useContext(ThemeContext)

	return (
		<Container>
			<Logo svg={LogoSVG} />
			<Rank />
			<RankNumber>#2135</RankNumber>
			<Coin />
			<Amount>1304</Amount>
			<SwitchContainer>
				<Switch
					onChange={themeToggler} 
					checked={context.title === 'dark'} 
					checkedIcon={false}
					uncheckedIcon={false}
					height={10}
					width={40}
					handleDiameter={20}
					onColor={context.button}
					offHandleColor={'#333'}
				/>
			</SwitchContainer>
		</Container>
	);
}

export default Header;
