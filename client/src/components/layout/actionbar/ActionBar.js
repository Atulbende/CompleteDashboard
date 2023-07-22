import React from 'react'
import './actionbar.scss'
import Dialog from '../../common/dialog/Dialog'
export default function ActionBar() {
  return (
    <section className='action-bar'>
       <div className='bar-title'>
            <span> ActionBar </span>
        </div>
        <div className='bar'>
          <ul className='bar-button'>
              <li className='btn-1'><i className="fa fa-floppy-disk" aria-hidden="true"></i><span>Save</span></li>
              <li className='btn-1'><i className="fa fa-trash" aria-hidden="true"></i><span>Delete</span></li>
              <li className='btn-1'><i className="fa fa-trash" aria-hidden="true"></i><span>Print</span></li>
              <li className='btn-1'><i className="fa fa-floppy-disk" aria-hidden="true"></i><span>Send</span></li>
          </ul>
        </div>
        <Dialog/>
    </section>
  )
}
