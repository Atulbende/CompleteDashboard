import React from 'react'
import Select from 'react-select'
import '../select-field/selectfields.css'
import {colourStyles} from './style.js'
export default function TextFields({col}) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' ,},
    { value: 'vasnilsla', label: 'Vanillsa' }
  ];
  return (
    <div className={`group-select ${col}` }>
      <span className='group-select-labal'>
        <label title="Customer Full Name" for="select">Customer Full Name</label>
      </span>
      <Select  styles={colourStyles} options={options} />
    </div>
  )
}
