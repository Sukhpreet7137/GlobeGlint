import React from 'react'
import img from "../images/images (1).jpg"

const Shimmer = () => {


  return (
    <div className=' w-[32%] rounded-lg bg-white text-black h-[30rem] p-2'>
        <div className='w-full h-full flex flex-col'>
            <div className='h-[90%] w-[100%] bg-[#666]'>
              <a target='_blank'><img className='h-[100%] w-[100%] bg-[#666]'/></a>
            </div>
            <div className='flex flex-col justify-evenly h-full'>
              <p className='text-xl font-bold text-center bg-[#666] h-5'></p>
              <p className='text-xl font-bold text-center bg-[#666] h-5'></p>
              <h1 className='bg-[#666] h-5'> <a className=' text-blue-800 '  target='_blank'></a></h1>
            </div>
        </div>
    </div>
  )
}

export default Shimmer
