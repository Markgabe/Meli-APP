import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'

import { Container, Local, Texto, Seta} from './styles';


function SubHeader({ themeToggler }) {
	const context = useContext(ThemeContext)

	return (
		<Container>
			<Local />
            <Texto>Enviar para Fulano Rua Número</Texto>
            <Seta />
		</Container>
	);
}

export default SubHeader;
