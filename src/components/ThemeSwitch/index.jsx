import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { SwitchContainer } from './styles';
import Switch from 'react-switch';

const ThemeSwitch = ({ toggler }) => {
	console.log(toggler);
	const context = useContext(ThemeContext);
	console.log(context);
	return (
		<SwitchContainer>
			<Switch
				onChange={toggler}
				checked={context.title === 'dark'}
				checkedIcon={false}
				uncheckedIcon={false}
				height={10}
				width={40}
				handleDiameter={20}
				onColor={'#ddd'}
				offHandleColor={'#333'}
			/>
		</SwitchContainer>
	);
};

export default ThemeSwitch;
