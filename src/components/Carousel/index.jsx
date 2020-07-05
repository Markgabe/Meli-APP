import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel as Car } from './styles';
import Img1 from '../../assets/1.jpg';
import Img2 from '../../assets/2.jpg';
import Img3 from '../../assets/3.jpg';

const Carousel = () => {
	return (
		<Car autoPlay>
			<div>
				<img src={Img1} />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<img src={Img2} />
				<p className="legend">Legend 2</p>
			</div>
			<div>
				<img src={Img3} />
				<p className="legend">Legend 3</p>
			</div>
		</Car>
	);
};

export default Carousel;
