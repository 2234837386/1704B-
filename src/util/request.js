import axios from "axios";
const instance = axios.create({
	baseURL: "http://baojia.chelun.com",
	timeout: 1000
})
instance.interceptors.request.use(function (config) {
	return config;
}, function (error) {
	return Promise.reject(error)
}
)
// Add a request interceptor
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	// Do something with response data
	if (reponse.status === 200) {
		if (reponse.data.code === 1) {
			return reponse.data.data
		} else {
			return {
				msg: "数据有误"
			}
		}
	} else {
		this.$notify({
			type: "warning",
			message: Response.type
		});
	}
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});
export default instance;