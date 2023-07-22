
import Axios from 'axios';
import { Screen } from '../components/common/notifications/toastify';
// Create an instance of Axios with a base URL
const apis = Axios.create({
  baseURL: 'http://localhost:3001/'
});
apis.interceptors.request.use(function (config) {Screen.LoaderON();return config;}, function (error) {return Promise.reject(error);});
apis.interceptors.response.use(function (response) {Screen.LoaderOff();return response;}, function (error) {return Promise.reject(error);});
export const Api= async(method,url,data,res)=>{
if(method=='GET')await  apis.get(url,data).then((response)=>{res= {...response};}) .catch((error) => { console.log(error);});
else if(method=='POST')await  apis.post(url,data).then((response)=>{res= {...response};}) .catch((error) => { console.log(error);});     
return res;
}
// export  LoadGrids;
// module.export Api();
