import React from "react";
import { useForm } from "../../hooks/useForm";

const initFormState = {
	name: "",
	age: "",
	height: "",
}

const SmurfForm = (props) => {
	const [input, handleChanges, clearForm] = useForm(initFormState);

	const handleSubmit = (evt) => {
		evt.preventDefault();
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
					<input name="age" id="age" type="number" value={input.age} onChange={handleChanges} />
			</label>
			<label for="height">
				Height (cm):
					<input name="height" id="height" type="number" value={input.height} onChange={handleChanges} />
			</label>
			<button>Submit</button>
		</form>
	)
}
export default SmurfForm;