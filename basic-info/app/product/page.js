import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div className='m-10'>
      <h1 className='text-3xl underline'>
        This is Product page.
      </h1>
      <div className='flex gap-5 mt-10'>
        <Link href='/product/men'>Men's cellection</Link>
        <Link href='/product/women'>Women's cellection</Link>
      </div>
    </div>


  )
}

export default page