import React from 'react'
import logo from '../../assets/home/logo.png'
import header_bottom from '../../assets/home/header_bottom_shape.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar() {
  return (
    <div className="block bg-blue-darken navbar relative">
        <div className={`flex  text-white py-2 px-4 items-center justify-start relative flex-wrap mx-11`}>
            <div className={`basis-1/8`}><img className='max-w-none'  src={logo}></img></div>
            <div className={`basis-3/6  grow`}>
                <div className='flex flex-row flex-wrap basis-3/4'>
                    <p className='ml-auto px-6 py-9 font-extrabold hover:text-yellow-color'>HOME</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>MOVIE</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>TV SHOW</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>BLOG</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>CONTACT</p>
                </div>
            </div>
            <div className={`basis-2/6 block  relative`}>
                <div className={`flex  items-center  basis-2/3 relative`}>
                    <div className='relative'>
                        <form className='relative '>
                            <input className='bg-black-color pl-5 pr-16 py-3 rounded-[30px]' type="text" placeholder="Find Favorite Movie"></input>
                            <p className='text-yellow-color absolute top-1/2 right-6 translate-y-[-50%]'><FontAwesomeIcon icon={faSearch}/></p> 
                    </form>
                    </div>
                    <div>
                        <p className={`w-32 py-2 font-extrabold px-6 bg-black-color rounded-full border-2 border-[#e4d804] hover:text-black-color hover:bg-yellow-color ml-9`}>SIGN IN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
