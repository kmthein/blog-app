import React from 'react'
import { Form } from 'react-router-dom'

const CreateForm = () => {
  return (
    <div className=' bg-white flex flex-col h-[500px] w-[50%]'>
        <div>
        <label htmlFor="title">Title</label>
        <input type='text' className=' bg-gray-500' />
        </div>
        <div>
        <label htmlFor="title">Title</label>
        <input type='text' className=' bg-gray-500' />
        </div>

    </div>

  )
}

export default CreateForm