import React, { useEffect } from 'react';

import { Container, Screen } from './styles';

import ScreenShot from '../../assets/meliHome.png';
import Jhony from '../../assets/Jhony2.png';

import Popup from 'reactjs-popup';

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
			<img
				src={Jhony}
				style={{ position: 'fixed', top: 600, width: 120 }}
			/>
		</Container>
	);
}

export default Home;
