import React from "react";
// import { Counter } from './features/counter/Counter';
import styled, { ThemeProvider } from "styled-components";

import theme from "./theme/index";

import Smurfs from "./features/smurfs/Smurfs";
import SmurfForm from "./features/smurf-form/SmurfForm";

const SApp = styled.div`
	background-color: ${pr => pr.theme.blackCoral};
	min-height: 100vh;
`;

const Header = styled.header`
	width: 100%;
	background-color: ${props => props.theme.darkPurple};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5rem;
	h1 {
		color: ${pr => pr.theme.wildBlue};
		font-size: 2rem;
		font-weight: 600;
	}
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<SApp className="App">
				<Header>
					<h1>SMURFS! With Redux</h1>
				</Header>
				{/* <Counter /> */}
				<Smurfs />
				<SmurfForm />
			</SApp>

		</ThemeProvider>
	);
}

export default App;
