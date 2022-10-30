import React from 'react'
import Card from "../Cards/Card"
import Dropdown from '../Dropdown';

const General = () => {
  return (
    <>
    <Dropdown/>
    <div className='mt-2'>
      <h1 className='text-center mt-4 text-decoration-underline'>General Members</h1>
      <Card/>
    </div>
    </>
  )
}

export default General
