import React from 'react'

import { Container, Separator, Row } from './styles'

import { Forward30 } from 'styled-icons/material-rounded'
import { LockAlt, LockOpenAlt } from 'styled-icons/boxicons-solid'
import { CashRegister } from 'styled-icons/fa-solid'

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
			<Row>
				<Challenge icon={ CashRegister }/>
			</Row>

		</Container>
	)
}

export default Challenges