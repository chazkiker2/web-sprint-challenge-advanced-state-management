import axios from "axios";
import { BASE_URL, SMURFS, SMURF_ID } from "./serverEndpoints";


export const getSmurfs = async () => {
	const url = `${BASE_URL}${SMURFS}`;
	const res = await axios.get(url);
	return res;
};

export const postSmurf = async ({name, age, height}) => {
	const url = `${BASE_URL}${SMURFS}`;
	const bodyData = { name, age, height };
	const res = await axios.post(url, bodyData);
	return res;
};

export const putSmurfById = async (id, { name, age, height }) => {
	const url = `${BASE_URL}${SMURF_ID(id)}`;
	const bodyData = { name, age, height };
	const res = await axios.put(url, bodyData);
	return res;
};

export const deleteSmurfById = async (id) => {
	const url = `${BASE_URL}${SMURF_ID(id)}`;
	const res = await axios.delete(url);
	return res;
}