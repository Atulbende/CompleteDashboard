import React from 'react'
import TextFields from '../../common/text-field/TextFields'
import Dialog from '../../common/dialog/Dialog';
export default function Keyword() {
        function EnterApi(){
          alert('save');
        }
  return (
          <div  className='content-form'>

              <TextFields   col={'col-33'}/>
              <TextFields  col={'col-33'}/>
              <TextFields  col={'col-33'}/>
            

          </div>
  )
} 
