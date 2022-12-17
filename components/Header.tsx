import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center'>
        <div className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://github.com/AnthonyFiset" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.linkedin.com/in/anthony-fiset-43672270/" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.youtube.com/channel/UCCBunP94d0smP3wE79bHiZQ" fgColor='gray' bgColor='transparent' />
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon className="cursor-pointer" network="email" fgColor='gray' bgColor='transparent' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </div>
    </header>
  )
}

export default Header