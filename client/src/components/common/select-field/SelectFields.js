import React from 'react'
import '../select-field/selectfields.css'
export default function TextFields({col}) {
  return (
    <div className={`group-select ${col}` }>
      <span className='group-select-labal'>
        <label title="Customer Full Name" for="select">Customer Full Name</label>
      </span>
      <select className='select' id="text" >
        <option >--Select--</option>
      </select>
    </div>
  )
}
