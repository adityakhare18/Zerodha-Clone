import React from 'react'

const Section3_content = ({para,anchor}) => {
  return (
    <div className='w-3/5'>
      <p className='text-base mt-6 mb-4'>{para}</p>
      <a href="#" className='cursur-pointer mt-6 text-[#387ed1] font-semibold'>{anchor}</a>
    </div>

  )
}

export default Section3_content
