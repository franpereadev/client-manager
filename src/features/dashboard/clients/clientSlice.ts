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
			lastName: "perea",
			mobile: "3452345234",
			email: "fran@fran.fran",
			summary: "hot",
			show: true,
		},
		{
			id: "2",
			name: "pedro",
			lastName: "perea",
			mobile: "3452345234",
			email: "fran@fran.fran",
			summary: "hot",
			show: true,
		},
		{
			id: "3",
			name: "juan",
			lastName: "perea",
			mobile: "3452345234",
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
			const { id, name, lastName, email, mobile, summary, show } =
				action.payload;
			const foundClient = state.value.find((client) => client.id === id);
			if (foundClient) {
				foundClient.name = name;
				foundClient.lastName = lastName;
				foundClient.email = email;
				foundClient.mobile = mobile;
				foundClient.summary = summary;
				foundClient.show = show;
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
