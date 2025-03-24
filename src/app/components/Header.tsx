import React from 'react'
import SippinLogo from './SippinLogo'

const Header = () => {
  return (
    <header className='flex justify-center py-4 -mb-28'>
        <SippinLogo className='h-20 z-10 cursor-pointer text-sky-800'/>
    </header>
  )
}

export default Header