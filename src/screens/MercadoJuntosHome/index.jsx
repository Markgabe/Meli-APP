import React, { useEffect } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Challenges from '../Challenges';
import Menu from '../../components/Menu';

function MercadoJuntosHome({ toggle }) {
	useEffect(() => {
		document.title = 'Mercado Juntos';
	}, []);
	return (
		<Container>
			<Header themeToggler={toggle} />
			<Challenges />
		</Container>
	);
}

export default MercadoJuntosHome;
