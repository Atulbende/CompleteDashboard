import React from 'react'
import './breadcrumb.css'

export default function Breadcrumb() {
  return (
    <>
      <section className='breadcrumb'>
          <ul className='breadcrumb-item'>
            <li >Dashboard</li>
            <li> /</li>
            <li> Home</li>
            <li>/</li>
            <li> New </li>
          </ul>
      </section>
      </>
  )
}
