import React from 'react'
import '../text-field/textfields.css'
export default function TextFields({col}) {
  return (
    <div className={`group-text ` + col }>
      <span className='group-text-labal'>
        <label for="text" title="Customer Full Name">Customer Full Name</label>       
      </span>
      <input type='text'></input>
    </div>
  )
}
