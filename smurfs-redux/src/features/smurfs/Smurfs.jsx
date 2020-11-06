import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllSmurfs, fetchSmurfs } from "./smurfsSlice";
// import {Link}

const SmurfCard = props => {
	const smurf = props;
	const s = smurf.smurf[0];
	// console.log(props);
	console.log(smurf);
	console.log(s);
	// const { age, height, name } = props.smurf[0];
	return (
		<div className="smurf-container">
			<h3>{`Name: ${s.name}`}</h3>
			<p>Age: {s.age}</p>
			<p>Height: {s.height}</p>
		</div>
	);
}

const Smurfs = (props) => {
	const dispatch = useDispatch();
	const smurfs = useSelector(selectAllSmurfs);
	const smurfsStatus = useSelector((state) => state.smurfs.status);
	const error = useSelector((state) => state.smurfs.error);

	// useEffect(() => {
	// 	if (smurfsStatus === "idle") {
	// 		dispatch(fetchSmurfs());
	// 	}
	// }, [smurfsStatus, dispatch]);
	useEffect(() => {
		dispatch(fetchSmurfs(smurfs));
	}, []);


	let content;
	if (smurfsStatus === "pending") {
		content = (<div className="loader">Loading... </div>);
	}
	else if (smurfsStatus === "succeeded") {
		// const orderedSmurfs = smurfs.sort((a, b) => (a.age - b.age));
		content = smurfs.map((smurf) => {
			return (<SmurfCard smurf={smurf} />)
		})
	}
	else if (smurfsStatus === "error") {
		content = <div>{error}</div>
	}

	return (
		<div>
			<h1>Home Page</h1>
			{content}
			{/* {
				smurfs.length > 0 && smurfs.map(smurf => (<SmurfCard key={smurf.id} smurf={smurf} />))
			} */}
		</div>
	);
};

export default Smurfs;