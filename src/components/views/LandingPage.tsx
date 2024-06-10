import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <div>

       <div className='flex flex-col text-center md:text-start gap-6 md:gap-0 md:flex-row justify-between items-center  container py-10 xl;py-14'>
        <div className=' space-y-9'>
        <p className='text-sm text-gray-700'>--Clothing</p>
        <h1 className='max-w-lg xl:max-w-2xl text-4xl md:text-5xl xl:text-[50px] font-bold text-gray-700  '>Style is a way to say who you are without having to speak.</h1>
        <p className='max-w-md'>Anyone can beat you but no one can beat your outfit as long as you wear Basit Outfits</p>
        <div className='space-x-5'>
          <Button className=' buttonVariants' variant={'outline'} size={'lg'}>Explore cloths</Button>
          <Button className=' buttonVariants' variant={'secondary'} size={'lg'}>Get started&nbsp; <ArrowRight size={15}/></Button>
          
        </div>
        </div>
        <div className="rounded-xl bg-gray-900/5 p-2  ring-1  ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <Image src={require('../.../../../../public/pic/clothing logo.jpg' )} width={1000} height={1000} alt='' className='flex-grow w-96  lg:w-[28rem] xl:w-[34rem] h-96 lg:[28rem] xl:h-[34rem]'/>

        </div>
       </div>

    </div>
  )
}

export default LandingPage