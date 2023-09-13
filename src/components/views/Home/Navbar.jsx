import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { RiWhatsappFill } from 'react-icons/Ri';
import { FaBars } from  'react-icons/Fa';
function Navbar() {
  return (
    <div>
 <div className='xl:flex justify-center items-center gap-36 flex-wrap  mt-12 md:flex hidden'>
      <img className='max-w-[110px] h-[40px]' src="/byo.png" alt="" />
        <div className='flex gap-10'>
          <div className='flex items-center'>
            <input className='bg-[#F5F5F5] outline-none  text-[13px] rounded-3xl pl-2' type="text" name="" id="" />
             <div className=' relative right-5 '><HiMagnifyingGlass /></div>
          </div>
          <ul className='flex items-center flex-wrap gap-10 text-[14px]'>
           <li><a className='text-[14px]' href=""><u>Home</u></a></li>
           <li><a  href=""><select className='bg-white'><option  value="0">Beaty</option></select></a></li>
           <li><a  href=""><select className='bg-white'><option  value="0">Spa</option></select></a></li>
           <li><a  href=""><select className='bg-white '><option  value="0">Hair</option></select></a></li>
           <li><a  href=""><select className='bg-white '><option  value="0">Event</option></select></a></li>
           <li><a  href="">About</a></li>
          </ul>
         
          <button className='bg-[#313131] py-1  px-4 text-white rounded-lg'>Book Now</button>
        
        <div className='flex items-center flex-wrap  gap-2'>
        <div className='text-green-600 text-[30px]'>  < RiWhatsappFill /></div>
        <h1>1 (808) 567 876556</h1>
        </div>
        </div>
      </div>
      <div className='flex justify-between md:px px-3 sm:p p-6 items-center md:hidden'>
      <img className='max-w-[110px] h-[40px]' src="/byo.png" alt="" />
        <FaBars />
      </div>
    </div>
   
   

 
   
  )
}

export default Navbar