const axios = require('axios')

// GET request for remote image
// 创建axios实例

const instance = axios.create({
	baseURL: 'https://baojia.chelun.com',
	timeout: 1000,
	// headers: {'X-Custom-Header': 'foobar'}
})

//   请求拦截器
// Add a request interceptor
instance.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
	// Do something with response data
	// 自己写的
	if (response.status == 200) {
		if (response.data.code == 1) {
			return response.data.data
		} else {
			return {
				msg: '数据错误'
			}
		}
	} else {
		this.$notify({
			type: 'warning',
			message: response.type
		});
	}

	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});
export default instance;