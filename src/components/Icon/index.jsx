import React from 'react';

import { ResultIcon } from './styles';

import { Link } from 'react-router-dom';

function Icon({ svg, active, to }) {
	return (
		<Link to={to} style={{ margin: 'auto' }}>
			<ResultIcon svg={svg} active={active} />
		</Link>
	);
}

export default Icon;
