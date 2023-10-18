import React from 'react'
import img from "../images/images (1).jpg"

const NewsCard = (data1) => {

  var str=String(data1?.data1?.description);
  if (typeof str === 'string' && str.length > 200) {
    str = data1?.data1?.description.substring(0, 200) + '...';
  }
  return (
    <div className=' w-[32%] rounded-lg bg-white text-black h-[30rem] p-2'>
        <div className='w-full h-full flex flex-col'>
            <div className='h-[50%] w-[100%]'>
              <a href={data1?.data1?.url} target='_blank'><img src={data1?.data1?.urlToImage} alt={"Image Not Found"} className='h-[100%] w-[100%]'/></a>
            </div>
            <div className='flex flex-col justify-evenly h-full'>
              <p className='text-xl font-bold text-center'>{data1?.data1?.title}</p>
              <h1>{str} <a className=' text-blue-800' href={data1?.data1?.url} target='_blank'>readmore</a></h1>
            </div>
        </div>
    </div>
  )
}

export default NewsCard
