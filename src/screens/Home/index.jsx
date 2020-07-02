import React from 'react'

import { Container, Menu } from './styles'

import Header from '../../components/Header'
import Challenges from '../Challenges'

function Home() {
  return (
    <Container>
        <Header />
        <Challenges />
        <Menu />
    </Container>
  )
}

export default Home