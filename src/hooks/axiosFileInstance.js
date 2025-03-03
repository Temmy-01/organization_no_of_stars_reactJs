import axios from 'axios';

const user = JSON.parse(localStorage.getItem("userData"));

const apiUrl =  process.env.NODE_ENV !== 'production' ? 
            process.env.REACT_APP_BASE_DEV_URL :
                process.env.REACT_APP_BASE_PROD_URL

const options = {
  baseURL: `${apiUrl}/${process.env.REACT_APP_VERSION}`, // Set your API base URL
}

if(user) {
  Object.assign(options, {headers: {
    "Authorization" : `Bearer ${user.token}`,
    "Content-Type": 'multipart/form-data',
  }})
}


const axiosFileInstance = axios.create(options);

export default axiosFileInstance;