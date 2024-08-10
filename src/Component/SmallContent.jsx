import React from 'react'
import Button from './Button'

const SmallContent = ({heading,para}) => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-5xl font-medium text-gray-600">{heading}</h1>
        <h5 className="mt-4 mb-16 text-xl font-normal">{para}</h5>
        <Button />
      </div>
      
  )
}

export default SmallContent
