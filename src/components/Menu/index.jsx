import React from 'react';

import { Container, Separator } from './styles';

import Icon from '../Icon';

import { Home } from 'styled-icons/boxicons-solid';
import { UserCircle } from 'styled-icons/boxicons-solid';
import { Gear } from 'styled-icons/evil';
import { Cart } from 'styled-icons/ionicons-solid';

import { User } from 'styled-icons/evil';
import { UserCircle as User2 } from 'styled-icons/fa-regular';
import { User as User3, ShoppingCart } from 'styled-icons/feather';
import { Cart as Cart2 } from 'styled-icons/ionicons-outline';

function Menu() {
	return (
		<Container>
			<Icon svg={Home} active />
			<Icon svg={Cart2} />
			<Separator />
			<Icon svg={User3} />
			<Icon svg={Gear} />
		</Container>
	);
}

export default Menu;
