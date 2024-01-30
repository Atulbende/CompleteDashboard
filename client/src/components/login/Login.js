import React, { useEffect, useState } from 'react'
import '../login/login.css'
import { Screen } from '../common/notifications/toastify';
import { Validation } from '../utils/login/validation';
// import {Api} from '../../services/api/clientAPI';
import { useNavigate } from 'react-router-dom';
import {useUserLoginMutation,useUserSingupMutation} from '../../rtk/login/mq_login'
export default function Login() {
    const Navigate=useNavigate();
    const [userLogin,{data:loginResponse,isLoading:loginLoading}]=useUserLoginMutation();
    const [userSinup,{data:singupResponse,isLoading:singupLoading}]=useUserSingupMutation();

    const [loginAnim,setLoginAnim]=useState('');//animation login-singup
    const [signupAnim,setSignupAnim]=useState('d-none');//animation login-singup
    const loginInit={Login_UserName:'',Login_Password:''};//login form
    const [Login,SetLogin]=useState(loginInit);
    const signUpInit={Signup_Email:'',Signup_UserName:'',Signup_Password:''}
    const [Signup,setSingup]=useState(signUpInit);  

    function LoginHandle(e){
        SetLogin(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    function SignupsHandle(e){
        setSingup(prev=>({...prev,[e.target.name]:e.target.value}));
    }
  
    async  function  LoginCheck(){ 
                if(Login.Login_Password && Login.Login_UserName){
                        userLogin({data:Login}).then((loginResponse)=>{
                            console.log('sda',loginResponse)
                            if(loginResponse?.data===true){ 
                                Navigate('/Dashboard');
                            }else{
                                Screen.Notification.Error(Screen.Notification.Msg.Def2);
                            }
                        });
                        
                }else{
                    Screen.Notification.Error(Screen.Notification.Msg.Def2);
                }
       
    }
    // validation for singup , call api , after 1.5 sec open login dialog 
    async  function  SignUpSave(){
       if(Validation.Valid(Signup)){
        
        userSinup({data:Signup}).then((singupResponse)=>{
            console.log('singupResponse::',singupResponse);
        })
        //  const res=await Api('POST','/signup',Signup);
        //  if(res.data===1){
        //     Screen.LoaderON();
        //     setTimeout(()=>{
        //         Screen.LoaderOff();
        //         Screen.Notification.Success("Congratulations you have successfully registered");
        //         setLoginAnim('login-swipleft');setSignupAnim('signup-swipleft');
        //         setSingup(signUpInit);
        //     },1500)
           
        //  }else if(res.data===-1){
        //     Screen.Notification.Error("Email-Id Already registered please enter diffrent Email-Id");
        //  }else{
        //     Screen.Notification.Error(res.data);
        //  }
         
       }
    }
  return (
        <div className='container'>
            {/* Login page Design */}
            <div className={`login ${loginAnim}`}>
                <section className='login-title'>
                    <h1>Welcome Back </h1>
                    <span>Please login to continue...</span>
                </section>
                <section className='login-body'>
                    <h1>LOGIN</h1>                  
                    <input name="Login_UserName" type='text' placeholder='User Name' autoComplete='false' onChange={LoginHandle}></input>
                    <input onKeyPress={(e)=> {if(e.key==='Enter'){LoginCheck();}}}  name="Login_Password" type='password' placeholder='Passowrd' onChange={LoginHandle}></input>
                </section>
                <section className='login-footer'>
                    <button type='button' className='login-btn' onClick={LoginCheck} >{loginLoading ? <div class="flippers"><div></div><div></div><div></div><div></div><div></div></div>:'LOGIN'}</button>
                    <button type='button' className='sign-up-btn' onClick={()=>{setLoginAnim('login-swipright');setSignupAnim('signup-swipright');}}>SIGN UP</button>
                    <span> <a href='www.google.com' target='_blank'>Forget Passowrd</a></span>
                </section>
            </div>
            {/* Sign up page Design */}
            <div className={`login ${signupAnim}`}>
                <section className='login-title'>
                            <h1>SIGN UP </h1>
                            <span>Please signup to continue</span>
                        </section>
                <section className='login-body'>                 
                    <input name="Signup_Email" value={Signup.Signup_Email}  type='email' placeholder='Email' onChange={SignupsHandle}></input>
                    <input name="Signup_UserName" value={Signup.Signup_UserName} type='text' placeholder='User Name' onChange={SignupsHandle}></input>
                    <input name="Signup_Password" value={Signup.Signup_Password} type='password' placeholder='Passowrd' onChange={SignupsHandle}></input>
                </section>
                <section className='login-footer'>
                    <button type='button' className='sign-up-btn' onClick={SignUpSave} >SIGN UP</button>
                    <button type='button' className='login-btn'  onClick={()=>{setLoginAnim('login-swipleft');setSignupAnim('signup-swipleft')}}>LOGIN</button>
               </section>
            </div>
          
        </div>
  )
}
