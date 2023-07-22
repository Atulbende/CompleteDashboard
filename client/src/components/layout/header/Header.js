import React, { useEffect, useRef, useState } from 'react';
import {toggleSidebar} from '../../../redux/reducers/uiSlice';
import {useDispatch} from 'react-redux';
import './header.css'
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate=useNavigate()
  const [toggleIcon,setToggleIcon]=useState('fa-solid fa-bars');
  const Dispatch=useDispatch();
  const popupRef=useRef();
  const [IsPopup,SetIsPopup]=useState(false);
  useEffect(()=>{
    let hide=(e)=>{
      if(!popupRef.current.contains(e.target)){
        SetIsPopup(false);
      }
    }
    document.addEventListener('mousedown',hide);  
    return ()=>{document.removeEventListener('mousedown',hide);}  
  })
  const handleToggle=()=>{
    Dispatch(toggleSidebar());
    setToggleIcon(toggleIcon=='fa-solid fa-bars'?'fa-sharp fa-solid fa-xmark fa-fade':'fa-solid fa-bars');
  }
  return (
    <>
        <nav className="top-nav " ref={popupRef}>
              <div id='start' role="button" onClick={()=>handleToggle()}><div  className='bars' ><span className='bars-circle' ><i className={toggleIcon}></i></span></div><span className='start-title'><a href='#'>Dashboard</a></span></div>
              <div id='end' role="button"  onClick={()=>{SetIsPopup(!IsPopup);}} ><a href='#'><span><i className="fa fa-user-circle fa-3x"></i></span></a></div>
              <div className={`popup-menu ${IsPopup?``:`d-none`}`} >
                <ul>
                  <li><a href='#'><i className="fa fa-user"></i><span className='menu-title'> Profile</span></a></li>
                  <li><a href='#'><i className="fa fa-cog"></i><span className='menu-title'> Setting</span></a></li>  
                  <li><a href='#'><i className="fa fa-sticky-note"></i><span className='menu-title'> Note</span></a></li>
                  <li onClick={()=>{navigate('/Login')}}><a href='#'><i className="fa fa-power-off" ></i><span className='menu-title'> Logout</span></a></li>
                </ul>
             </div>
        </nav>
       
    </>
    )
}
