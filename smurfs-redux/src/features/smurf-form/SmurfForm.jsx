import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm";
import { postSmurf } from "../smurfs/smurfsSlice";

const initFormState = {
	name: "",
	age: "",
	height: "",
}

const SmurfForm = (props) => {
	const dispatch = useDispatch();
	const [input, handleChanges, clearForm] = useForm(initFormState);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(postSmurf(input));
		clearForm();
	}

	return (
		<form onSubmit={handleSubmit}>
			<label for="name">
				Name:
					<input name="name" id="name" type="text" value={input.name} onChange={handleChanges} />
			</label>
			<label for="age">
				Age:
					<input name="age" id="age" type="number" step="1" value={input.age} onChange={handleChanges} />
			</label>
			<label for="height">
				Height (cm):
					<input name="height" id="height" type="number" step="1" value={input.height} onChange={handleChanges} />
			</label>
			<button>Submit</button>
		</form>
	)
}
export default SmurfForm;