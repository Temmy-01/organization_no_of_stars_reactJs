import axios from 'axios';
import { toast } from 'react-toastify';

const apiUrl =  process.env.NODE_ENV !== 'production' ? 
            process.env.REACT_APP_BASE_DEV_URL :
                process.env.REACT_APP_BASE_PROD_URL

const options = {
  baseURL: `${apiUrl}/${process.env.REACT_APP_VERSION}`, // Set your API base URL
}

const axiosInstanceAdmin = axios.create(options);

const checkToken = (token) => {
  axios.get(`${apiUrl}/v1/admin/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
      .then()
      .catch(err => {
        if(err.response.status == '401') {
          localStorage.removeItem("userData")
          window.location.href = '/auth/login/admin';
          console.log(err.response);
          return
        }
      })
}

axiosInstanceAdmin.interceptors.request.use(async req => {
  req.headers['Accept'] = 'application/json';
  // req.headers['Content-Type'] = 'multipart/form-data';

  const user = JSON.parse(localStorage.getItem("userData"));

  const token = user?.token;

  if (token) {
    checkToken(token)
  }

  req.headers['Authorization'] = token ? `Bearer ${token}` : null;

  return req
})

axiosInstanceAdmin.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.message?.includes('Network Error')) {
      toast.error('There seems to be something wrong with your internet connection, please check and try again.', { type: 'error', duration: 5000 })

      return
    }

    if (error?.response?.data?.message ==  'Unauthenticated.') {
      localStorage.removeItem('userData')
      window.location.href = '/auth/login/admin';
      return
    }
  }
);

export default axiosInstanceAdmin;