import React from 'react'
import { BsStarFill } from 'react-icons/Bs';
import { FaFacebook } from 'react-icons/Fa';
import { FcGoogle } from 'react-icons/Fc';
function Reviews() {
  return (
    <div>
      <div className='  text-[41px] text-[#333] font-semibold   text-center max-w-full px-3 mt-6'>Reviews</div>
      <div>
        <div className=' flex justify-center mt-12 flex-wrap sm:px px-1 gap-12 items-center '>
          <img className='max-w-[12px] appearance-none cursor-pointer ' src="/Vector1.png" alt="" />
          <div className='bg-[#FFF] px-10 py-8 rounded-[20px]  shadow-lg shadow-black-500'>
            <div className='flex items-center gap-5'>
              <img src="/Ellipse1.png" alt="" />
              <p className='text-[20px] text-[#313131 ]'> J.James</p>
            </div>
            <div className='flex items-center pt-6  justify-center   gap-2'>
              <div className='flex gap-2 items-center text-yellow-300'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>on</p>
              <a href="">< FcGoogle /></a>
              <a className='text-blue-600' href=""><FaFacebook /></a>
              <img src="/image3.png" alt="" />
            </div>
            <p className='text-[13px] text-center max-w-[300px] text-[#06040A] pt-3 font-light'>Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet ementum Quam aliquam. Quam vel aliquam sit vulputate.</p>
          </div>
          <div className='  bg-[#FFF] px-10  py-8 rounded-[20px]  shadow-lg shadow-black-500 '>
            <div className='flex items-center  gap-6'>
              <img className='' src="/Ellipse2.png" alt="" />
              <p className='text-[20px] text-[#313131 ]'>J.James</p>
            </div>
            <div className='flex items-center  pt-6   gap-2'>
              <div className='flex items-center gap-2 text-yellow-300'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>on</p>
              <a href="">< FcGoogle /></a>
              <a className='text-blue-600' href=""><FaFacebook /></a>
              <img src="/image3.png" alt="" />
            </div>
            <p className='text-[13px] text-center max-w-[300px] text-[#06040A] pt-3 font-light'>Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet ementum Quam aliquam. Quam vel aliquam sit vulputate.</p>
          </div>
          <div className=' bg-[#FFF] px-10  py-8 rounded-[20px]  shadow-lg shadow-black-500 '>
            <div className='flex items-center gap-6'>
              <img src="/Ellipse4.png" alt="" />
              <p className='text-[20px] text-[#313131 ]'>J.James</p>
            </div>
            <div className='flex items-center pt-6  gap-2'>
              <div className='flex items-center gap-2 text-yellow-300'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>on</p>
              <a href="">< FcGoogle /></a>
              <a className='text-blue-600' href=""><FaFacebook /></a>
              <img src="/image3.png" alt="" />
            </div>
            <p className='text-[13px] text-center max-w-[300px] text-[#06040A] pt-3 font-light'>Lorem ipsum dolor sit amet elit, consectetur adipiscing elit cursus imperdiet ementum Quam aliquam. Quam vel aliquam sit vulputate.</p>
          </div>
          <div><img className='max-w-[12px] appearance-none  cursor-pointer ' src="/Vector2.png" alt="" /></div>
        </div>
      </div>

    </div>
  )
}

export default Reviews