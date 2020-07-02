import React from 'react'

import { Container, Coin, Amount, Rank, RankNumber } from './styles'
import Logo from '../Logo'

import LogoSVG from '../../assets/melijuntos.svg'


function Header() {
	return (
			<Container>
				<Logo svg={ LogoSVG }/>
				<Rank />
				<RankNumber>#2135</RankNumber>
				<Coin />
				<Amount>1304</Amount>
			</Container>
	)
}

export default Header