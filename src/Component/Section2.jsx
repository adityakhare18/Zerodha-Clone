import React from 'react'
import Content_1_container from './Content_1_container'

const Section2 = () => {
  const contentData = [
    {
      heading: "Customer-first always",
      para: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."
    },
    {
      heading: "No spam or gimmicks",
      para: "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like."
    },
    {
      heading: "The Zerodha universe",
      para: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
    },
    {
      heading: "Do better with money",
      para: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
    }
  ];
  return (
    <div className='px-48'>
      <h2 className='mb-10 text-4xl text-[#424242]'>Trust with confidence</h2>
      <div className='content flex justify-between gap-10 items-center'>
        <div className="content-1">
          {contentData.map((items,index)=>(
            <Content_1_container 
            key={index}
            heading={items.heading}
            para={items.para}
            />
          ))}
        </div>
        <div className="content-2">
          <img src="https://zerodha.com/static/images/ecosystem.png" alt="" className='h-[612px]'/>
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <img src="https://zerodha.com/static/images/press-logos.png" alt="" />
      </div>
    </div>
  )
}

export default Section2
