import React from 'react'
import {FaUserSecret} from 'react-icons/fa'
import {AiOutlineLike ,AiOutlineDislike} from 'react-icons/ai'

export default function Review() {
  return (
    <div>   
        <div className=' my-5'>
            <div className="flex mb-5">
                <div className='w-[50px] h-[50px] bg-black-color  rounded-md mr-5'><FaUserSecret className='mx-auto ' ></FaUserSecret></div>
                <div>
                    <p>John Doe</p>
                    <p className='text-[12px]'>10.10.2022, 17:53</p>
                </div>
            </div>
            <div className="border-[1px] border-blue-darken  py-5 bg-black-color rounded-md">
            <p className='px-[20px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <div className='flex justify-between border-t-[1px] border-blue-darken px-[20px] text-[14px]'>
                <div className="flex mt-5 ">
                    <p className="mr-3  text-teal-500 cursor-pointer"><AiOutlineLike /></p>
                    <p className='text-rose-600 cursor-pointer'><AiOutlineDislike/></p>
                </div>
                <div className="flex mt-5">
                    <p className='cursor-pointer'>Reply</p>
                    
                </div>
            </div>
            </div>
        </div> 
        <div className='pl-[30px] my-5'>
            <div className="flex mb-5">
                <div className='w-[50px] h-[50px] bg-black-color  rounded-md mr-5'><FaUserSecret className='mx-auto ' ></FaUserSecret></div>
                <div>
                    <p>John Doe</p>
                    <p className='text-[12px]'>10.10.2022, 17:53</p>
                </div>
            </div>
            <div className="border-[1px] border-blue-darken  py-5 bg-black-color rounded-md">
            <p className='px-[20px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <div className='flex justify-between border-t-[1px] border-blue-darken px-[20px] text-[14px]'>
                <div className="flex mt-5 ">
                    <p className="mr-3  text-teal-500 cursor-pointer"><AiOutlineLike /></p>
                    <p className='text-rose-600 cursor-pointer'><AiOutlineDislike/></p>
                </div>
                <div className="flex mt-5">
                    <p className='cursor-pointer'>Reply</p>
                    
                </div>
            </div>
            </div>
        </div> 
       
       
    </div>
  )
}
