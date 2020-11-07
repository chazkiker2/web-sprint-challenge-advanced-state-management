import React from "react";
import { useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm";
import { postSmurf, fetchSmurfs } from "../smurfs/smurfsSlice";
import styled from "styled-components";

const SContainer = styled.div`
	background-color: ${pr => pr.theme.darkPurple};
	height: 10rem;
	width: 80%;
	margin: 0 auto;
	border-radius: 20px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	/* align-items: center; */
	form {

	color: ${pr => pr.theme.wildBlue};
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: flex-end;
	h1 {
		align-self: center;
		font-size: 2rem;
		font-weight: 600;
	}
	label {
		text-align: left;
		input {
			margin: 0  0  0 2rem;
			background-color: transparent;
			border: 1px solid ${pr => pr.theme.wildBlue};
			border-radius: 5px;
			color: ${pr => pr.theme.wildBlue};
		}
	}
	button {
		display: inline-block;
		width: 10rem;
		/* height: 1rem; */
		align-self: center;
		background-color: ${pr => pr.theme.wildBlue};
		border: 1px solid ${pr => pr.theme.wildBlue};
		border-radius: 5px;
		&:hover {
			background-color: transparent;
			color: ${pr => pr.theme.wildBlue};
		}
	}
	}
`;
const SForm = styled.form`
`;

const initFormState = {
	name: "",
	age: "",
	height: "",
}

const SmurfForm = (props) => {
	const dispatch = useDispatch();
	const [input, handleChanges, clearForm] = useForm(initFormState);

	const handleSubmit = (evt) => {
		// evt.preventDefault();
		dispatch(postSmurf(input));
		clearForm();
	}

	return (
		<SContainer>
			<form onSubmit={handleSubmit}>
				<h1>Add a Smurf!</h1>
				<label htmlFor="name">
					Name:
					<input name="name" id="name" type="text" value={input.name} onChange={handleChanges} />
				</label>
				<label htmlFor="age">
					Age:
					<input name="age" id="age" type="number" step="1" value={input.age} onChange={handleChanges} />
				</label>
				<label htmlFor="height">
					Height (cm):
					<input name="height" id="height" type="number" step="1" value={input.height} onChange={handleChanges} />
				</label>
				<button>Submit</button>
			</form>
		</SContainer>
	)
}
export default SmurfForm;