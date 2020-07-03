import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Container, Core, Icon } from './styles';

function Challenge({ icon, percentage }) {
	const { challengeBorder } = useContext(ThemeContext);

	return (
		<Container>
			<CircularProgressbarWithChildren
				value={percentage}
				strokeWidth={8}
				styles={buildStyles({
					pathColor: challengeBorder,
					trailColor: 'transparent',
				})}
			>
				<Core>
					<Icon svg={icon} />
				</Core>
			</CircularProgressbarWithChildren>
		</Container>
	);
}

export default Challenge;
