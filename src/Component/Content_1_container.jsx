import React from 'react'

const Content_1_container = ({heading,para}) => {
  return (
    <div className='mb-10'>
      <h4 className='text-xl font-medium text-[#424242]'>{heading}</h4>
      <p className='w-96 mt-1 text-[#666] text-base'>{para}</p>
    </div>
  )
}

export default Content_1_container
