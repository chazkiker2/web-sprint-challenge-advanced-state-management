
import React from "react";
import { Counter } from './features/counter/Counter';

function App() {
	return (
		<div className="App">
			<h1>SMURFS! W/Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<div>Start inside of your `src/index.js` file!</div>
			<div>Have fun!</div>
			<Counter />
		</div>
	);
}

export default App;
