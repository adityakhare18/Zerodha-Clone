import React from 'react'
import Section3_content from './Section3_content'

const Section3 = () => {
  return (
    <div className='px-48 mt-24 flex items-center justify-between mb-32'>
      <div className='image w-1/3'>
        <img src="https://zerodha.com/static/images/index-education.svg" alt="" className='w-full' />
      </div>
      <div className='section3-content w-2/3'>
        <h4 className='text-2xl text-center'>Free and open market education</h4>
        <div className='flex ml-10 gap-10'>
        <Section3_content 
          para="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading."
          anchor="Varsity "
        />
        <Section3_content 
          para="TradingQ&A, the most active trading and investment community in India for all your market related queries."
          anchor="TradingQ&A "
        />
        </div>
      </div>
    </div>
  )
}

export default Section3
