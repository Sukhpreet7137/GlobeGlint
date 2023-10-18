import React, { useEffect, useState } from 'react'
import img from "../images/images (1).jpg";
import img2 from "../images/123.png";

const Header = ({topic,settopic,setdata}) => {

	const [value,setvalue]=useState(null);
	const handleInputChange = (e) => {
		setvalue(e.target.value);
	  };
	
	  const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			settopic(value);
		}
	  };
  return (
	<div> 
	    <div className=' bg-slate-50 flex flex-row justify-around shadow-lg text-xl py-3 uppercase fixed top-0 w-full'>
			<div className='cursor-pointer font-bold text-2xl ' onClick={()=>settopic("random")}><img className='w-full h-10' src={img2}/></div>
			<div className='flex flex-row justify-evenly gap-x-3 uppercase'>
				<div onClick={()=>{setdata([]); settopic("null")}} className={topic==="null" ? 'border-b-2 border-blue-700 cursor-pointer' : 'cursor-pointer'}>Home</div>
				<div onClick={()=>{setdata([]); settopic("Entertainment")}} className={topic==="Entertainment" ? 'border-b-2 border-blue-700 cursor-pointer' : 'cursor-pointer'}>Entertainment</div>
				<div onClick={()=>{setdata([]); settopic("Business")}} className={topic==="Business" ? 'border-b-2 border-blue-700 cursor-pointer' : 'cursor-pointer'}>Business</div>
				<div onClick={()=>{setdata([]); settopic("Health")}} className={topic==="Health" ? 'border-b-2 border-blue-700 cursor-pointer' : 'cursor-pointer'}>Health</div>
				<div onClick={()=>{setdata([]); settopic("Technology")}} className={topic==="Technology" ? 'border-b-2 border-blue-700 cursor-pointer' : 'cursor-pointer'}>Technology</div>
				<div onClick={()=>{setdata([]); settopic("Sports")}} className={topic==="Sports" ? 'border-b-2 border-blue-700 cursor-pointer' : 'cursor-pointer'}>Sports</div>
			</div>
			<div>
			<input
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				className='border-2 border-black rounded-md px-2 text-sm py-1 outline-2'
				/>
			</div>
		</div>
	</div>
  )
}

export default Header
