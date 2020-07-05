import styled from 'styled-components';

import { Search } from 'styled-icons/evil';

export const Container = styled.div`
	display: flex;

	@media (min-width: 768px) {
		width: 70%;
	}
`;

export const Bar = styled.div`
	display: flex;
	width: 100%;
	background-color: white;
	margin: auto 0;

	border-radius: 7px;
`;

export const Input = styled.input`
	border: none;
	background: transparent;

	height: 30px;
	margin: auto 0;
`;

export const SearchIcon = styled(Search)`
	color: var(--button);
	width: 30px;
	height: 30px;
	margin: auto 2px;
`;
