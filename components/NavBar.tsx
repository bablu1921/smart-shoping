import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/assets/icons/logo.svg"
import search from "../public/assets/icons/search.svg"
import heart from "../public/assets/icons/black-heart.svg"
import user from "../public/assets/icons/user.svg"

const navIcons = [
  {
    src: search,alt: 'search'
  },
  {
    src: heart,alt: 'black-heart'
  },
  {
    src: user,alt: 'user'
  }
]

const NavBar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex items-center gap-1'>
                <Image 
                src={logo}
                width={27}
                height={27}
                alt='Home'
                />
                <p className='nav-logo'>
                  Smart <span className='text-primary'>Shopping</span>
                </p>
            </Link>
            <div className='flex items-center gap-5'>
              {
                navIcons.map((icon)=>(
                  <Image key={icon.alt}
                  src={icon.src}
                  width={27}
                  height={27}
                  alt='icons'
                  className='object-contain'
                  />
                ))
              }
            </div>
        </nav>
    </header>
  )
}

export default NavBar