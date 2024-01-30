import React, { useEffect, useRef, useState } from 'react';
import {toggleSidebar} from '../../../redux/reducers/uiSlice';
import {useDispatch} from 'react-redux';
import {Dialog,DialogHeader,DialogBody,DialogFooter} from '../../common/dialog/Dialog'
import TextFields from '../../common/text-field/TextFields' 
import { Screen } from '../../common/notifications/toastify';

import Button from '../../common/button/Button';
import './header.css'
import { useNavigate } from 'react-router-dom';
import RadioButton from '../../common/radioButton/RadioButton';
export default function Header() {
  const navigate=useNavigate()
  const [toggleIcon,setToggleIcon]=useState('fa-solid fa-bars');
  
  const [isSetting,setIsSetting]=useState(false);
  const Dispatch=useDispatch();
  const [IsPopup,SetIsPopup]=useState(false);
  const handleToggle=()=>{
    Dispatch(toggleSidebar());
    setToggleIcon(toggleIcon=='fa-solid fa-bars'?'fa-sharp fa-solid fa-xmark fa-fade':'fa-solid fa-bars');
  }
  
  return (
    <>
        <nav className="top-nav ">
            <div id='start' role="button" onClick={()=>handleToggle()}><div  className='bars' ><span className='bars-circle' ><i className={toggleIcon}></i></span></div><span className='start-title'><a href='#'>Dashboard</a></span></div>
            <div id='end' role="button"  onClick={()=>{SetIsPopup(!IsPopup);}} ><a href='#'><span><i className="fa fa-user-circle fa-3x"></i></span></a></div>
            <div className={`popup-menu ${IsPopup?``:`d-none`}`} >
              <ul>
                <li><a href='#'><i className="fa fa-user"></i><span className='menu-title'> Profile</span></a></li>
                <li><a href='#' onClick={()=>{setIsSetting(!isSetting);SetIsPopup(!IsPopup);}}><i className="fa fa-cog"></i><span className='menu-title'> Setting</span></a></li>  
                <li><a href='#'><i className="fa fa-sticky-note"></i><span className='menu-title'> Note</span></a></li>
                <li onClick={()=>{navigate('/Login')}}><a href='#'><i className="fa fa-power-off" ></i><span className='menu-title'> Logout</span></a></li>
              </ul> 
            </div>
        </nav>
        {/* Click on Setting Start*/}
                  {isSetting ?(<Themes Close={setIsSetting}/>):null}
        {/* Click on Setting End*/}
    </>
    )
}
export function Themes({Close}){ 
  const [theme,setTheme]=useState('gm');

  const changesTheme=(e)=>{
    e.target.value==='gm'?Screen.morning():Screen.night();
    setTheme(e.target.value);
  }
  (function(){
    theme==='gm'?Screen.morning():Screen.night();
  }())
    return(
    <>
        <Dialog classes='col-25 row-25'>
            <DialogHeader >
              <i class="fa-sharp fa-solid fa-comment-dots"></i>
              <span>Dialog</span>
              <span role='button' onClick={()=>{Close(false)}}><i class="fa-sharp fa-regular fa-circle-xmark fs-16"></i></span>
           </DialogHeader>
                  <DialogBody classes={'row-50 d-center '}>
                    <RadioButton id={'gm'} val={'gm'} fn={changesTheme} label={'Good Morning'} isChecked={theme==='gm'}></RadioButton>
                    <RadioButton id={'gn'} val={'gn'} fn={changesTheme} label={'Good Night'}   isChecked={theme==='gn'}></RadioButton>
                  </DialogBody>
            <DialogFooter >
              <Button icon='fa-solid fa-floppy-disk' title='Save' action=''/>
              <Button icon='fa-sharp fa-solid fa-xmark' title='Cancel' action='' />
            </DialogFooter>
        </Dialog>
    </>)
}
