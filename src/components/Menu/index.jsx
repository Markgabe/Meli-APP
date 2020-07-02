import React from 'react';

import { Container, Separator } from './styles';

import Icon from '../Icon'

import { ListUl } from 'styled-icons/boxicons-regular'
import { Home } from 'styled-icons/boxicons-solid'
import { UserCircle } from 'styled-icons/boxicons-solid'
import { LocalOffer } from 'styled-icons/material'
import { Gear } from 'styled-icons/evil'
import { Cart } from 'styled-icons/ionicons-solid'


function Menu() {
    return (
        <Container>
            <Icon svg={ Home } active/>
            <Icon svg={ Cart }/>
            <Separator />
            <Icon svg={ UserCircle }/>
            <Icon svg={ Gear }/>
        </Container>
    )
}

export default Menu