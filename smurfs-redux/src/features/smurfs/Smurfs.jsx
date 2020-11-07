import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllSmurfs, fetchSmurfs } from "./smurfsSlice";
import styled from "styled-components";

const SGallery = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: stretch;
	background-color: ${pr => pr.theme.wildBlue};
	width: 80%;
	margin: 5rem auto;
	padding: 10rem;
	border-radius: 20px;
`;
const SCard = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	width: 15rem;
	height: 8rem;
	border-radius: 20px;
	background-color: ${pr => pr.theme.darkPurple};
	color: ${pr => pr.theme.wildBlue};
	div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: flex-start;
		text-align: left;
		h3 {
			font-size: 1.4rem;
			font-weight: 800;
		}
	}
`;

const SmurfCard = props => {
	const { smurf } = props;
	console.log(smurf);
	const { name, age, height } = smurf;
	return (
		<SCard className="smurf-container">
			<div>
				<h3>Name: {name}</h3>
				<p>Age: {age} years</p>
				<p>Height: {height}</p>
			</div>
		</SCard>
	);
}

const Smurfs = (props) => {
	const dispatch = useDispatch();
	const smurfs = useSelector(selectAllSmurfs);
	// const updated = useSelector((state) => state.smurfs.updated);
	const smurfsStatus = useSelector((state) => state.smurfs.status);
	const error = useSelector((state) => state.smurfs.error);

	const prevSmurfsRef = useRef();
	useEffect(() => {
		prevSmurfsRef.current = smurfs;
	});
	// const prevSmurfs = prevSmurfsRef.current;
	useEffect(() => {
		if (prevSmurfsRef.current.length !== smurfs.length) {
			dispatch(fetchSmurfs(smurfs));
		}
	}, [prevSmurfsRef, dispatch, smurfs])

	// useEffect(() => {
	// 	if (smurfsStatus === "idle" || smurfsStatus === "succeeded") {
	// 		dispatch(fetchSmurfs(smurfs));
	// 	}
	// }, [smurfs, smurfsStatus, dispatch]);

	useEffect(() => {
		dispatch(fetchSmurfs(smurfs));
	}, [dispatch, smurfs])


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
			<SGallery>
				{content}
			</SGallery>
		</div>
	);
};

export default Smurfs;