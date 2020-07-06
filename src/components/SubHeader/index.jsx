import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, Local, Texto, Seta } from './styles';

function SubHeader({ themeToggler }) {
	const context = useContext(ThemeContext);

	return (
		<Container>
			<Local />
			<Texto>Enviar para Rio de Janeiro 22020002</Texto>
			<Seta />
		</Container>
	);
}

export default SubHeader;
