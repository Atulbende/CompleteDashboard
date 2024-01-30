import {useRef,React} from 'react'
import TextFields from '../../common/text-field/TextFields'
import ActionBar from '../../layout/actionbar/ActionBar'
import Dialog from '../../common/dialog/Dialog';
export default function Keyword() {
  const BtnRef=useRef()
  const BtnRef1=useRef()
  return (

    <>
          <ActionBar BtnSaveFn={BtnRef} btnUpdate={BtnRef1}/>
          <div  className='content-form'>
              <TextFields  col={'col-33'}/>
              <TextFields    col={'col-33'}/>
              <TextFields    col={'col-33'}/>
            
          </div>
         
          </>
  )
} 
