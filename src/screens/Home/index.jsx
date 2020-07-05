import React, { useEffect } from 'react';

import { Container, Screen } from './styles';

import ScreenShot from '../../assets/meliHome.png';

import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Carousel from '../../components/Carousel';
import Menu from '../../components/Menu';

function Home({ toggle }) {
	useEffect(() => {
		document.title = 'Mercado Livre';
	}, []);
	return (
		<Container>
			<Header themeToggler={toggle} />
			<SubHeader />
			<Screen>
				<img src={ScreenShot} />
			</Screen>
		</Container>
	);
}

export default Home;
