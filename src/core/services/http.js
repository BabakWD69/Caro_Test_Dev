import axios from "axios";
import { toast } from "react-toastify";
import { getItem, setItem, removeItem } from "./storage/storage";

// const tokenKey = "helperBrokerToken";
const tokenKey = "__use_local_storage_state_hook__value__token";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // check if error is expected from backend

    try {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

      // if(error.response.status===400){
      //   console.log(error.response.data.errors);
      // }
      if (expectedError) {
        if (error.response.status === 401) {
          // history.push("/login");
          toast.error("Token is Expired")
          window.location.href = "";
        }
        // if (error.response.status === 405) {
        //   toast.error("نوع فایل اشتباه میباشد");
        // }
      }

      // if error doesnt expected when we log it
      if (!expectedError) {
        // tweak it later
        // get error message from backend (see object of response later... maybe its changed)
        try {
          toast.error(error.response.data.message.message[0].message);
        } catch (error) {}
      }
    } catch (error) {}
    return Promise.reject(error);
  }
);

const setToken = (token) => {
  setItem(tokenKey, token);
};

const getToken = () => {
  return getItem(tokenKey);
};

const removeToken = () => {
  removeItem(tokenKey);
};
// will send token to headers request ( in token body )
axios.interceptors.request.use((config) => {
  config.headers["Authorization"] =
    "bearer " + getItem(tokenKey).replace('"', "").replace('"', "");
  return config;
});

const http = {
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  get: axios.get,
  setToken: setToken,
  getToken: getToken,
  removeToken: removeToken,
};

export default http;

