import {React,useEffect,useRef, useState } from 'react'
import './actionbar.scss'

import Dialog from '../../common/dialog/Dialog'
export default function ActionBar({BtnSaveFn,btnUpdate}) {
  const [data,setdata]=useState('');
  const [actionToggle,setActionToggle]=useState('') 
  function saveData(){
    setdata('ActionBar');
  }
  function DeleteData(){
    console.log('Delete!')
  }
  function toggleActionFn(){
    actionToggle==='d-none'?setActionToggle('d-flex'):setActionToggle('d-none')
  }
  return (
    <section className='action-bar'>
      <span className='error_msg'>{data}</span>
       <div className='bar-title'>
            
        </div>
        
        <div className='bar'>
         <div role='button' onClick={toggleActionFn} className='menu-collaps'><i class={`fa-solid fa-circle-chevron-${actionToggle==='d-flex'?'up':'down'}`}></i><span>Actions</span></div>
         <div className='trasition-bar'>
          <ul className={`bar-button ${actionToggle}`} >
              <li onClick={()=>{saveData()}} ref={BtnSaveFn} className='btn-1'><i className="fa fa-floppy-disk" aria-hidden="true"></i><span>Save</span></li>
              <li onClick={()=>{DeleteData()}} ref={btnUpdate} className='btn-1'><i className="fa fa-trash" aria-hidden="true"></i><span>Delete</span></li>
              <li className='btn-1'><i className="fa fa-trash" aria-hidden="true"></i><span>Print</span></li>
              <li className='btn-1'><i className="fa fa-floppy-disk" aria-hidden="true"></i><span>Send</span></li>
          </ul>
          </div>
        </div>
        {/* <Dialog/> */}
    </section>
  )
}
