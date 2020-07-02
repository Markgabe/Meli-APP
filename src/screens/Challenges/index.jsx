import React from 'react'

import { Container, Separator } from './styles'

import { Forward30 } from 'styled-icons/material-rounded'
import { LockAlt, LockOpenAlt } from 'styled-icons/boxicons-solid'

import Challenge from '../../components/Challenge'

function Challenges() {
 	return (
    	<Container>
			<Challenge icon={ Forward30 }/>
			<Separator />
			<Challenge icon={ LockOpenAlt }/>
			<Challenge icon={ LockAlt }/>
		</Container>
	)
}

export default Challenges