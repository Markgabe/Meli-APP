import React from 'react';

import { Container } from './styles';

import Icon from '../Icon';

import { Home } from 'styled-icons/boxicons-solid';
import { UserCircle } from 'styled-icons/boxicons-solid';
import { Gear, Trophy } from 'styled-icons/evil';
import { Cart } from 'styled-icons/ionicons-solid';

import { User } from 'styled-icons/evil';
import { UserCircle as User2 } from 'styled-icons/fa-regular';
import { User as User3, ShoppingCart } from 'styled-icons/feather';
import { Cart as Cart2 } from 'styled-icons/ionicons-outline';

function Menu({ act }) {
	return (
		<Container>
			<Icon svg={Home} active={act === 'home'} to="/mercadojuntos/" />
			<Icon
				svg={Cart2}
				active={act === 'store'}
				to="/mercadojuntos/store"
			/>
			<Icon
				svg={Trophy}
				active={act === 'rank'}
				to="/mercadojuntos/rank"
			/>
			<Icon svg={Gear} to="/mercadojuntos/" />
		</Container>
	);
}

export default Menu;
