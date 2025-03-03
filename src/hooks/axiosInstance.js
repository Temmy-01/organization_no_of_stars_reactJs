import axios from 'axios';
import { toast } from 'react-toastify';

const apiUrl = process.env.NODE_ENV !== 'production' ?
  process.env.REACT_APP_BASE_DEV_URL :
  process.env.REACT_APP_BASE_PROD_URL;

const options = {
  baseURL: `${apiUrl}/${process.env.REACT_APP_VERSION}`, // Set your API base URL
};

// const axiosInstance = axios.create(options);

// // Request interceptor to add authorization header
// axiosInstance.interceptors.request.use(req => {
//   req.headers['Accept'] = 'application/json';

//   const user = JSON.parse(localStorage.getItem("userData"));

//   if (user?.token) {
//     req.headers['Authorization'] = `Bearer ${user.token}`;
//   }

//   return req;
// }, error => {
//   return Promise.reject(error);
// });

// // Response interceptor to handle errors
// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error?.response?.status === 401 || error?.response?.data?.message === 'Unauthenticated.') {
//       localStorage.removeItem('userData');
//       window.location.href = '/auth/login';
//       toast.error('Session expired. Please log in again.');
//       return;
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;




const axiosInstance = axios.create(options);

// Request interceptor to add authorization header
axiosInstance.interceptors.request.use(req => {
  // ... other logic
  req.headers['Accept'] = 'application/json';

  const user = JSON.parse(localStorage.getItem("userData"));

  if (user?.token) {
    req.headers['Authorization'] = `Bearer ${user.token}`;
  }

  return req;
}, error => {
  return Promise.reject(error);
});

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401 || error?.response?.data?.message === 'Unauthenticated.') {
      // Check if the user is already on the login page
      if (window.location.pathname !== '/auth/login') {
        localStorage.removeItem('userData');
        // localStorage.removeItem('userPermissions');
        window.location.href = '/auth/login';
        toast.error('Session expired. Please log in again.');
      }
      return;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

