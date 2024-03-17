import {useRef,React} from 'react'
import Checkbox from '../../common/checkbox/Checkbox'
import ActionBar from '../../layout/actionbar/ActionBar'
import Dialog from '../../common/dialog/Dialog';
export default function Roles() {
  return (
    <>
     <ActionBar />
          <div  className='content-form'>
        <Checkbox label="Role Manager" col={'col-15'}></Checkbox>
        <Checkbox label="Role Reader" col={'col-15'}></Checkbox>
        <Checkbox label="Dashboard Manager" col={'col-15'}></Checkbox>
        <Checkbox label="Dashboard Manager" col={'col-15'}></Checkbox>
        <Checkbox label="Dashboard Manager" col={'col-15'}></Checkbox>
        <Checkbox label="Dashboard Manager" col={'col-15'}></Checkbox>
        
          </div>
          </>
  )
}
