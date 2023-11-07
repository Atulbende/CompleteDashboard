import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";

import { toast } from 'react-toastify';
export const Screen={  
        LoaderON:function(){$('.Savtech_overlay').addClass('d-flex').removeClass('d-none');},
    LoaderOff: function (){$('.Savtech_overlay').addClass('d-none').removeClass('d-flex'); },
    Notification:{ 
            Msg:{
                    Def1:'Login Successfully',
                    Def2:'Incorrect User Name/Password',
                    Def3:'Save Successfully',
                    Def4:'Update Successfully',
                    Def5:'Delete Successfully',
                    Def6:'Nothing has been changed',
                    Def7:'Record Already Exist',
            },
            Info:function (Msg,Time){
                    toast.info(Msg, {position: "top-center", autoClose: Time,hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    },
            Error:function(Msg,Time){
                    toast.error(Msg, { position: "top-center",autoClose: Time, hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
            },
            Warm:function(Msg,Time){
                    toast.warn(Msg, {position: "top-center", autoClose: Time,
                            hideProgressBar: false,
                            closeOnClick: true, 
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
    
            },
            Success:function(Msg,Time){
                    toast.success(Msg, {position: "top-center", autoClose: Time,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    
                    
            }
    }
    } 