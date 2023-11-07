import React, { useState } from 'react';
import ReactDom from 'react-dom';
import '../dialog/dialog.css';
import TextFields from '../text-field/TextFields' 
import Button from '../button/Button';
 function Dialog() {
  const [x,setX]=useState('');
  return ReactDom.createPortal(
    <>  
    <div className={`dialog-overlay ${x}`}>
    <div className='dialog col-50'>
        <section className='dialog-header'>
          <i class="fa-sharp fa-solid fa-comment-dots"></i>
          <span>Dialog</span>
          <span role='button' onClick={()=>x=='d-none'?setX('d-flex'):setX('')}><i class="fa-sharp fa-regular fa-circle-xmark fs-16"></i></span>
        </section>
        <section className='dialog-body'>
        <TextFields col="col-25"/>
        <TextFields col="col-25"/>
        <TextFields col="col-50"/>
        <TextFields col="col-50"/>
        <TextFields col="col-50"/>
        <TextFields col="col-50"/>
        <TextFields col="col-50"/>
        <TextFields col="col-50"/>
        <TextFields col="col-50"/>
        </section>
        <section className='dialog-footer'>
          <Button icon='fa-solid fa-floppy-disk' title='Save' action=''/>
          <Button icon='fa-sharp fa-solid fa-xmark' title='Cancel' action='' />
        </section>
      </div>
    </div>
    </>,document.getElementById('dialog-root')
  )
}
export default Dialog;