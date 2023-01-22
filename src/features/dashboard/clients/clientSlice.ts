import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { Client } from "./client";

export interface ClientState {
	value: Client[];
}

const initialState: ClientState = {
	value: [
		{
			id: "1",
			name: "fran",
			surname: "perea",
			phone: "3452345234",
			email: "fran@fran.fran",
			summary: "hot",
			show: true,
		},
		{
			id: "2",
			name: "pedro",
			surname: "perea",
			phone: "3452345234",
			email: "fran@fran.fran",
			summary: "hot",
			show: true,
		},
		{
			id: "3",
			name: "juan",
			surname: "perea",
			phone: "3452345234",
			email: "fran@fran.fran",
			summary: "hot",
			show: true,
		},
	],
} as ClientState;

export const clientSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {
		createClient: (state, action: PayloadAction<Client>) => {
			state.value.push(action.payload);
		},
		updateClientById: (state, action) => {
			const { id, name, surname, email, phone, summary } = action.payload;
			const foundClient = state.value.find((client) => client.id === id);
			if (foundClient) {
				foundClient.name = name;
				foundClient.surname = surname;
				foundClient.email = email;
				foundClient.phone = phone;
				foundClient.summary = summary;
			}
		},
		deleteClient: (state, action) => {
			const foundClient = state.value.find(
				(client) => client.id === action.payload
			);
			if (foundClient) {
				state.value.splice(state.value.indexOf(foundClient), 1);
			}
		},
	},
});

export const { createClient, updateClientById } = clientSlice.actions;
export default clientSlice.reducer;
