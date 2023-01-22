import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from '@reduxjs/toolkit'
import { Client } from "./client";

export interface ClientState {
	value: Client[];
}

const initialState: ClientState = {
	value: [
		{
			name: "fran",
			show: true,
		},
		{
			name: "stijn",
			show: false,
		},
		{
			name: "gabriel",
			show: true,
		},
	],
} as ClientState;

export const clientSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {
		createClient: (state, action: PayloadAction<Client>) => {
			state.value.push(action.payload)
		}
	},
});

export const {createClient} = clientSlice.actions
export default clientSlice.reducer;
