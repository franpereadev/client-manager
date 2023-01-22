import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Client } from "../client";
import { createClient } from "../clientSlice";

function ClientForm() {
	const [client, setClient] = useState({
		name: "",
		show: false,
	});

	const handleChange = (e: any) => {
		setClient({
			...client,
			[e.target.name]: e.target.value,
		});
		console.log(e.target.name, e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
	console.log("OLAA")
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="name" onChange={handleChange} />
			<input
				type="radio"
				id="html"
				name="show"
				value="true"
				onChange={handleChange}
			/>
			<label htmlFor="html">yes</label>
			<input
				type="radio"
				id="css"
				name="show"
				value="false"
				onChange={handleChange}
			/>
			<label htmlFor="css">no</label>
			<button>Save</button>
		</form>
	);
}

export default ClientForm;
