import React from 'react'
import NewsCard from './NewsCard'
import Shimmer from './Shimmer'

const Body = ({data,topic}) => {
  return (
    <div className='bg-black h-full flex flex-col items-center pb-24 mt-16'>
        {
          topic==="null"?(
            <h1 className='text-white text-center text-4xl bg-gray-500 w-fit my-7 rounded-lg px-5 py-3'>Top Headlines</h1>
          ):(<div className='my-7'></div>)
        }        
           {
            data.length===0?
            (<div className='flex flex-row w-10/12 gap-x-5 justify-center flex-wrap gap-y-10'><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/></div>):
            ( <div className='flex flex-row w-10/12 gap-x-5 justify-center flex-wrap gap-y-10'>
            {
              data.map((data1)=>{
                return <NewsCard data1={data1}/>
              })
            }
            
          </div> )
           }
    </div>
  )
}

export default Body
