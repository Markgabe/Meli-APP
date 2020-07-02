import React from 'react'

import { Container, Separator, Row } from './styles'

import { Forward30 } from 'styled-icons/material-rounded'
import { LockAlt, LockOpenAlt } from 'styled-icons/boxicons-solid'

import Challenge from '../../components/Challenge'

function Challenges() {
 	return (
    	<Container>
			<Row>
				<Challenge icon={ Forward30 }/>
			</Row>
			<Row>
				<Challenge icon={ LockOpenAlt }/>
				<Challenge icon={ LockAlt }/>
			</Row>
		</Container>
	)
}

export default Challenges