import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initState = {
	smurfs: [],
	status: "idle",
	// updated: false,
	error: null,
	currentRequestId: undefined,
};

export const fetchSmurfs = createAsyncThunk(
	"smurfs/fetchSmurfs",
	async (smurfs, { getState, requestId }) => {
		// const { currentRequestId, status } = getState().smurfs;
		const { data } = await axios.get("http://localhost:3333/smurfs");
		return data;
	}
)

export const postSmurf = createAsyncThunk(
	"smurfs/postSmurf",
	async (bodyDataIn, { getState, requestId }) => {
		// const { currentRequestId, status } = getState().smurfs;
		const { data } = await axios.post("http://localhost:3333/smurfs", bodyDataIn);
		console.log(data);
		return data;
	}
)

const smurfsSlice = createSlice({
	name: "smurfs",
	initialState: initState,
	reducers: {
	},
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
				action.payload.forEach(x => {
					state.smurfs.push(x);
				})
				state.currentRequestId = undefined;
			}
		},
		[fetchSmurfs.rejected]: (state, action) => {
			const { requestId } = action.meta;
			if (state.status === "pending" && state.currentRequestId === requestId) {
				state.status = "idle";
				state.error = action.error;
				state.currentRequestId = undefined;
			}
		},
		[postSmurf.pending]: (state, action) => {
			if (state.status === "idle") {
				state.status = "pending";
				state.currentRequestId = action.meta.requestId;
			}
		},
		[postSmurf.fulfilled]: (state, action) => {
			const { requestId } = action.meta;
			if ((state.status === "pending") && state.currentRequestId === requestId) {
				state.status = "idle";
				state.smurfs = action.payload;
				console.log(action.payload);
			}
		},
		[postSmurf.rejected]: (state, action) => {
			const { requestId } = action.meta;
			if (state.status === "pending" && state.currentRequestId === requestId) {
				state.status = "idle";
				state.error = action.error;
				state.currentRequestId = undefined;
			}
		}
	}
});

export default smurfsSlice.reducer;

export const selectAllSmurfs = (state) => state.smurfs.smurfs;