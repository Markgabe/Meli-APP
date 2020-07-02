import React from 'react'

import { Container, Core, Icon } from './styles'

function Challenge({ icon }) {
  return (
    <Container>
        <Core>
            <Icon svg={ icon }/>
        </Core>
    </Container>
  )
}

export default Challenge