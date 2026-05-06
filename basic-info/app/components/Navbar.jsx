import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-blue-950 px-7 py-3 mb-6'>
      <h1 className='text-2xl'>Next.js </h1>

      <div className='flex gap-6 px-6 py-3'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/product'>Product</Link>
        <Link href='/contect'>Contect</Link>
      </div>
    </div>
  )
}

export default Navbar