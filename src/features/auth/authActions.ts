import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export async function registerUser(email: string) {
	return fetch(process.env.API_URL + "users/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(email),
	}).then((data) => data.json());
}
