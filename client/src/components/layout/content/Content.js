import React from 'react'
import './content.scss'
import ActionBar from '../actionbar/ActionBar'
import {  Outlet } from 'react-router-dom'
export default function Content() {
  return (
    <>
      <ActionBar/>
      <Outlet/>
    </>

  )
}
