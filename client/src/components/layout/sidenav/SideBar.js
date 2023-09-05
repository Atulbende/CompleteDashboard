import React from 'react'
import {  useState,useEffect } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import {Role} from '../../utils/role';

export default function SideBar({i,Lable,Link,icon,Access,subMenu}) {
    const history=useHistory();
    useEffect(() => {
        // Prevent the default behavior of the browser's backward and forward buttons
        const preventDefaultBehavior = (e) => {
          e.preventDefault();
          console.log('a')
          history.go(0)
          window.alert('You cannot navigate back from this page.');
          // Implement your custom logic here (e.g., show a message or redirect)
          // For example:
          // window.alert('You cannot navigate back from this page.');
        };
    
        window.addEventListener('popstate', preventDefaultBehavior);
    
        return () => {
          window.removeEventListener('popstate', preventDefaultBehavior);
        };
      }, []);
    const [toggle,SetToggle]=useState(false);
    const Userrole=[1,2,3,4,5,6];
    const flag= Role.roleAuth(Userrole,Access);
    if(subMenu && flag) {
        return (
            <div  className={toggle ? 'menu-item open':'menu-item'} key={i} ><div onClick={()=>{SetToggle(!toggle)}} className={`sidebar-item`}><span className='icon'> <i  className={icon}></i></span><span className='sidebar-title'> {Lable}</span><i className={toggle ? 'fas fa-chevron-down':'fas fa-chevron-right'}  ></i></div>
                 <div className={`child`}>   {
                        subMenu.map((val, index) => {
                        return ( <SideBar key={index} i={index} Lable={val.title} Link={val.link} Access={val.access}  icon={val.icon}  subMenu={val.subMenu}></SideBar>)
                        })
                    } 
                    </div>       
            </div>)
    }
    else{
        return flag && (  <div className={`menu-item`}  key={i}><NavLink to={Link}   className={`sidebar-item ` }><span className='icon'> <i  className={icon}></i></span><span className='sidebar-title'> {Lable}</span></NavLink></div>);
    }
  
}
    