import React from 'react'

import { BsFacebook , BsInstagram , BsLinkedin , BsTwitter } from "react-icons/bs";

function Footer() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()

  return (
    <> 
        <footer className='relative left-0 bottom-0 py-5 h-[10vh] flex flex-col sm:flex-row sm:px-20 items-center justify-between text-white bg-gray-800  ' >
            <section className='text-lg ' >
                Copyright {year} | All Rights Reserved
            </section>
            <section className='flex items-center justify-center gap-5 text-2xl text-white' >
                <a className='hover:text-yellow-500 transition-all ease-in-out ' href=""> <BsFacebook/></a>
                <a className='hover:text-yellow-500 transition-all ease-in-out ' href=""> <BsInstagram/></a>
                <a className='hover:text-yellow-500 transition-all ease-in-out  ' href=""> <BsLinkedin/></a>
                <a className='hover:text-yellow-500 transition-all ease-in-out ' href=""> <BsTwitter/></a>
            </section>
        </footer>
    </>
  )
}

export default Footer