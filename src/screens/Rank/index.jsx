import React from 'react';

import { Container } from './styles';

import Header from '../../components/HeaderJuntos';
import Ranking from '../../components/Ranking';
import Menu from '../../components/Menu';

function Rank({ toggle }) {
	return (
		<Container>
			<Header themeToggler={toggle} />
			<Ranking />
			<Menu act="rank" />
		</Container>
	);
}

export default Rank;
