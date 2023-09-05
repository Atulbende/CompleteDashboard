import React, { useEffect, useState } from 'react'
import '../text-field/textfields.css'
export default function TextFields({onSubmition,col}) {
  function HandleOnSubmition(e){
    console.log(e)
      if( onSubmition &&  e.keyCode===13){
        onSubmition();
      }
  }
  return (
    <div className={`group-text ` + col }>
      <span className='group-text-labal'>
        <label for="text" title="Customer Full Name">Customer Name</label>       
      </span>
      <input  onKeyUp={HandleOnSubmition} type='text'></input>
    </div>
  )
}
