
import Axios from 'axios';
import { Screen } from '../../components/common/notifications/toastify';
export const baseURL=`${process.env.REACT_APP_DASHBOARD_APP_API_BASEURL}`;
// Create an instance of Axios with a base URL
console.log('base:',baseURL);
const clientAPI = Axios.create({
  baseURL: baseURL,
  timeout:20000,
  headers:{}
});
clientAPI.interceptors.request.use(function (config) {
      // Screen.LoaderON();  
      return config;
}, function (error) {
      return Promise.reject(error);
});
clientAPI.interceptors.response.use(function (response) {
      // Screen.LoaderOff();
      return response;
}, function (error) {
      return Promise.reject(error);
});

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

export {clientAPI}
// export  LoadGrids;
// module.export Api();
