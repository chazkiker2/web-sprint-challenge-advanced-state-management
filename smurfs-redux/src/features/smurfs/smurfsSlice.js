import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSmurfs } from "../../api/smurfsAPI";

const initState = {
	smurfs: [],
	status: "idle",
	error: null,
	currentRequestId: undefined,
};

export const fetchSmurfs = createAsyncThunk(
	"smurfs/fetchSmurfs",
	async (smurfs, { getState, requestId }) => {
		const { currentRequestId, status } = getState().smurfs;
		if (status !== "pending" || requestId !== currentRequestId) {
			// return;
			console.log(status);
			console.log(requestId, currentRequestId);
		}

		const { data } = await axios.get("http://localhost:3333/smurfs");


		// console.log(data);
		return data;
	}
)

const smurfsSlice = createSlice({
	name: "smurfs",
	initialState: initState,
	reducers: {},
	extraReducers: {
		[fetchSmurfs.pending]: (state, action) => {
			if (state.status === "idle") {
				state.status = "pending";
				state.currentRequestId = action.meta.requestId;
			}
		},
		[fetchSmurfs.fulfilled]: (state, action) => {
			const { requestId } = action.meta;
			if (state.status === "pending" && state.currentRequestId === requestId) {
				state.status = "succeeded";
				console.log(action.payload);
				// state.smurfs = [...state.smurfs, action.payload];
				action.payload.forEach(x => {
					state.smurfs.push(x);
				})
				// state.smurfs.push(action.payload);
				// state.smurfs.push(action.payload.map(s => { return s }));
				state.currentRequestId = undefined;
			}
			// state.status = "succeeded";
			// state.smurfs = state.smurfs.concat(action.payload);
		},
		[fetchSmurfs.rejected]: (state, action) => {
			const { requestId } = action.meta;
			if (state.status === "pending" && state.currentRequestId === requestId) {
				state.status = "idle";
				state.error = action.error;
				state.currentRequestId = undefined;
			}
			// state.status = "failed";
			// state.error = action.payload;
		}
	}
});

export default smurfsSlice.reducer;

export const selectAllSmurfs = (state) => state.smurfs.smurfs;