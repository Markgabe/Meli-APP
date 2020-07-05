import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Loja from '../../components/Loja'


function Store({ toggle }) {
	return (
		<Container>
			<Header themeToggler={toggle} />
			<Loja/>
		</Container>
	);
}

export default Store;