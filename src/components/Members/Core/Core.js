import React from 'react'
import Card from "../Cards/Card"
import Dropdown from '../Dropdown';


const Core = () => {
  return (
    <>
      <Dropdown/>
      <div className='mt-2'>
        <h1 className='text-center mt-4 text-decoration-underline'>Faculty Advisor</h1>
        <Card />
      </div>

      <div className='mt-2'>
        <h1 className='text-center mt-4 text-decoration-underline'>Present Chairman</h1>
        <Card />
      </div>

      <div className='mt-2 row'>
          <h1 className='text-center mt-4 text-decoration-underline'>Core Members</h1>
        <div className='row-md-4 col-md-4'>
          <Card /> <Card /> <Card />
        </div>
        <div className='row-md-4 col-md-4'>
          <Card /> <Card /> <Card />
        </div>
        <div className='row-md-4 col-md-4'>
          <Card /> <Card /> <Card />
        </div>
      </div>
    </>
  )
}

export default Core
