import React from 'react';

import { useDarkMode } from '../../utils/useDarkMode';

import { light } from './light';
import { dark } from './dark';

export const Theme = () => {
	const [themeString, toggleTheme] = useDarkMode();

	return themeString === 'light' ? light : dark;
};
