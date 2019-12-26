import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'https://burger-builder-ulan-beltaev.firebaseio.com/'
});

export default axiosApi;