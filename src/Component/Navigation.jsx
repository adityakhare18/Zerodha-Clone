import React from 'react'

const Navigation = () => {
  return (
    <>
    <div className='nav px-48 flex justify-between pt-6'>
        <div className='img'>
            <img src="https://zerodha.com/static/images/logo.svg" alt="" className='max-h-5'/>
        </div>
        <div className='list'>
            <ul className='flex gap-10'>
            {["Signup","About","Products","Pricing","Support"].map((item,index) => (
                <li key={index} className="font-normal text-[#666] cursor-pointer hover:text-[#387ed1] transition-all duration-300 ease-in">{item}</li>
            ))}
            </ul>
        </div>
    </div>
    <hr className="border-gray-100 border-t-1 my-4" />

    </>
  )
}

export default Navigation
