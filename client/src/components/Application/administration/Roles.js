import {useRef,React} from 'react'
import TextFields from '../../common/text-field/TextFields'
import ActionBar from '../../layout/actionbar/ActionBar'
import Dialog from '../../common/dialog/Dialog';
export default function Roles() {
  return (
    <>
     <ActionBar />
          <div  className='content-form'>
              <TextFields  col={'col-33'}/>
              <TextFields    col={'col-33'}/>
              <TextFields    col={'col-33'}/>
          </div>
          </>
  )
}
