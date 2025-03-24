import React from 'react'
import { Bounded } from './Bounded'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

 
const Hero = () => {
    
  return (
   <Bounded>
    <div className='grid'>
        <div className='grid h-screen place-items-center'> 
            <div className="grid auto-rows-min place-items-center text-center">
                <h1 className='hero-header lg:text-[13rem] text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem]'>Sip Freely</h1>
                <div className='hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl'>
                    <h1>Crafted Fizz</h1>
                </div>
                <h1 className='hero-body text-2xl font-normal text-sky-950'>3-5g sugar. 9g fiber. 5 delicious flavors</h1>
                <Button className='mt-12 hero-btn' btnText="Shop Now" btnLink='https://sykescreatives.net' isRedirect={true} />
            </div>
        </div>
        <div className='grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2'>
            <Image src="/assets/imgs/all-cans-bunched.png" alt="" width={300} height={300} />
            <h1>Hello?</h1>
            <h1>Hello?</h1>
            <h1>Hello?</h1>
        </div>
    </div>
   </Bounded>
  )
}


export default Hero