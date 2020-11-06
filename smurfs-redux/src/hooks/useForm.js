// import useLocalStorage from "./useLocalStorage";
import { useState } from "react";


export const useForm = (initInput) => {
	const [input, setInput] = useState(initInput);

	const handleChanges = evt => {
		setInput({
			...input, [evt.target.name]: evt.target.value,
		})
	};

	const clearForm = e => {
		// e.preventDefault();
		setInput(initInput);
	};

	return ([input, handleChanges, clearForm]);
}

// export default useForm;