import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllSmurfs, fetchSmurfs, setUpdatedFalse } from "./smurfsSlice";
// import {Link}

const SmurfCard = props => {
	const { smurf } = props;
	console.log(smurf);
	const { name, age, height } = smurf;
	return (
		<div className="smurf-container">
			<h3>Name: {name}</h3>
			<p>Age: {age}</p>
			<p>Height: {height}</p>
		</div>
	);
}

const Smurfs = (props) => {
	const dispatch = useDispatch();
	const smurfs = useSelector(selectAllSmurfs);
	const updated = useSelector((state) => state.smurfs.updated);
	const smurfsStatus = useSelector((state) => state.smurfs.status);
	const error = useSelector((state) => state.smurfs.error);

	useEffect(() => {
		if (smurfsStatus === "idle" || smurfsStatus === "succeeded") {
			dispatch(fetchSmurfs(smurfs));
		}
	}, [smurfs, smurfsStatus, dispatch]);

	useEffect(() => {
		if (updated) {
			dispatch(fetchSmurfs(smurfs));
		}
		return () => {
			dispatch(setUpdatedFalse);
		}
	}, [updated, dispatch, smurfs])


	let content;
	if (smurfsStatus === "pending") {
		content = (<div className="loader">Loading... </div>);
	}
	else if (smurfsStatus === "succeeded") {
		// const orderedSmurfs = smurfs.sort((a, b) => (a.age - b.age));
		content = smurfs.map(smurf => {
			return (<SmurfCard key={smurf.smurf} smurf={smurf} />)
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