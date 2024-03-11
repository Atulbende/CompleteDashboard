
import Axios from 'axios';
// import { Screen } from '../../components/common/notifications/toastify';
import {setToken}  from '../../redux/reducers/authSlice';
export const baseURL=`${process.env.REACT_APP_DASHBOARD_APP_API_BASEURL}`;
// Create an instance of Axios with a base URL
console.log('base:',baseURL);
Axios.defaults.withCredentials = true
const clientAPI = Axios.create({
      withCredentials: true,
      // credentials: 'include',
      // credentials: 'include',
      baseURL: baseURL,
      timeout:20000,    
    });

const axiosMiddleware = ({ dispatch, getState }) => next => async action => {
    
clientAPI.interceptors.request.use(function (config) {
      // Screen.LoaderON();
      // dispatch(setToken({'token':'token'}))  
   
      config.headers["Authorization"] = `Bearer TOKEN`;
      return config;
}, function (error) {
      return Promise.reject(error);
});
clientAPI.interceptors.response.use(function (response) {
      // Screen.LoaderOff();
      //  dispatch(setToken({'token':'token'}))  
      return response;
}, function (error) {
      return Promise.reject(error);
});
return next(action);
};


// export const Api= async(method,url,data,res)=>{ 
// if(method=='GET') 
// await  clientAPI.get(url,data).then((response)=>{
//   res= {...response};
// }) .catch((error) => { console.log(error);});
// else if(method=='POST')
// await  clientAPI.post(url,data).then((response)=>{
//   res= {...response};}) .catch((error) => {
//      console.log(error);
// });     
// return res;
// }
export {clientAPI , axiosMiddleware};
// export default axiosMiddleware;

// export  LoadGrids;
// module.export Api();
