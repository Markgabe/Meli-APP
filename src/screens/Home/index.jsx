import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Challenges from '../Challenges';
import Menu from '../../components/Menu';

function Home({ toggle }) {
	return (
		<Container>
			<Header themeToggler={toggle} />
			<SubHeader />
			<Challenges />
		</Container>
	);
}

export default Home;
