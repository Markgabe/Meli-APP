import React from 'react';

import { Container } from './styles';

import Header from '../../components/HeaderJuntos';
import Loja from '../../components/Loja';
import Menu from '../../components/Menu';

function Store({ toggle }) {
	return (
		<Container>
			<Header themeToggler={toggle} />
			<Loja />
			<Menu act="store" />
		</Container>
	);
}

export default Store;
