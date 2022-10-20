import React from 'react'
import Card from "../Cards/Card"

const Core = () => {
  return (
    <div>
      <h2 className='text-center mt-4'>Faculty Advisor</h2>
      <Card/>
      <h2 className='text-center mt-4'>Present Chairman</h2>
      <Card/>
      <h2 className='text-center mt-4'>Core Members</h2>
      <Card/> <Card/> <Card/>
    </div>
  )
}

export default Core
