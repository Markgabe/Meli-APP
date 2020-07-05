import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	height: 100vh;
	width: 100vw;

	grid-template-areas:
		'Header'
		'SubHeader'
		'Screen'
		'Menu';

	grid-template-rows: 60px 50px auto 100px;
	grid-template-columns: 1fr;
`;
