import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Client } from "../client";
import { createClient } from "../clientSlice";
const { v1: uuidv1 } = require("uuid");
function ClientForm() {
	const dispatch = useDispatch();
	const [client, setClient] = useState({
		id: "",
		name: "",
		surname: "",
		phone: "",
		email: "",
		summary: "",
		show: false,
	});

	const handleChange = (e: any) => {
		setClient({
			...client,
			[e.target.name]:
				e.target.type == "checkbox" ? e.target.checked : e.target.value,
		});
		console.log(e.target.name, e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(createClient({ ...client, id: uuidv1() }));
	};
	return (
		<form onSubmit={handleSubmit} className="mt-5">
			<input
				type="text"
				name="name"
				placeholder="name"
				onChange={handleChange}
			/>
			<input
				type="text"
				name="surname"
				placeholder="surname"
				onChange={handleChange}
			/>
			<input
				type="text"
				name="phone"
				placeholder="phone"
				onChange={handleChange}
			/>
			<input
				type="text"
				name="email"
				placeholder="email"
				onChange={handleChange}
			/>
			<input
				type="text"
				name="summary"
				placeholder="summary"
				onChange={handleChange}
			/>
			<input type="checkbox" name="show" id="show" onChange={handleChange} />
			<button>Save</button>
		</form>
	);
}

export default ClientForm;
