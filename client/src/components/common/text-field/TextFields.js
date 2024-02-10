import React, { useEffect, useState } from 'react'
import '../text-field/textfields.css'
export default function TextFields({onSubmition,col}) {

  function HandleOnSubmition(e){
      if( onSubmition &&  e.keyCode===13){
          onSubmition.current.click();
      }
      console.log('red')
  }
  return (
    <div className={`slideform group-text ` + col }>
      <span className='group-text-labal'>
        <label for="text" title="Customer Full Name">Customer Name</label>       
      </span>
      <input  onKeyUp={HandleOnSubmition} type='text'></input>
    </div>
  )
}
