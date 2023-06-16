import axios from "axios";

// create an axios instance
const service = axios.create({
    baseURL: "/api",
    timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
    (config) => {
        if (
            config.method === "post" ||
            config.method === "put" ||
            config.method === "delete"
        ) {
            if (config.type === "json") {
                config.headers["Content-Type"] =
                    "application/json;charset=utf-8";
                config.data = JSON.stringify(config.data);
            }
            if (config.type === "form-data") {
                config.headers["Content-Type"] = "multipart/form-data";
            }
        }
        if (config.type === "export") {
            config.headers["export"] = "export";
        }
        return config;
    },
    (error) => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    (response) => {
        const res = response.data;
        const { config } = response;
        // 如果是下载文件则需要加上这一段类型判断
        if (config.responseType === "blob") {
            return response;
        }
        // if the custom code is not 20000, it is judged as an error.
        return res;
    },
    (error) => {
        console.log("err" + error); // for debug
        return Promise.reject(error);
    }
);

export default service;
