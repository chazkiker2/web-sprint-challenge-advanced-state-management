import axios from "axios";
import endpoints from "./serverEndpoints";
const { BASE_URL, SMURFS, SMURF_ID } = endpoints;


export const getSmurfs = async () => {
	const url = `${BASE_URL}${SMURFS}`;
	const { data } = await axios.get(url);
	console.log(data);
	return data;
};

export const postSmurf = (bodyIn) => {
	const url = `${BASE_URL}${SMURFS}`;
	const { name, age, height, } = bodyIn;
	const bodyData = { name, age, height };
	const res = axios.post(url, bodyData);
	return res;
};

export const putSmurfById = (id, bodyIn) => {
	const url = `${BASE_URL}${SMURF_ID(id)}`;
	const { name, age, height } = bodyIn;
	const bodyData = { name, age, height };
	const res = axios.put(url, bodyData);
	return res;
};

export const deleteSmurfById = (id) => {
	const url = `${BASE_URL}${SMURF_ID(id)}`;
	const res = axios.delete(url);
	return res;
}

const client = {
	getSmurfs,
	postSmurf,
	putSmurfById,
	deleteSmurfById,
}
export default client;