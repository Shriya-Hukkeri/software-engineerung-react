import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "https://fse-node-deployment.herokuapp.com";
const USERS_API = `${BASE_URL}/users`;

const api = axios.create({
	withCredentials: true
});

export const findAllTuitsLikedByUser = (uid) =>
	api.get(`${USERS_API}/${uid}/likes`)
		.then(response => response.data);


export const userLikesTuit = (uid, tid) =>
	api.put(`${USERS_API}/${uid}/likes/${tid}`)
		.then(response => response.data);