import React,{useEffect} from 'react'
import Navbar from '../components/commons/Navbar'
import Details from '../components/FilmDetail/Details'

export default function FilmDetail() {
   
  return (
    <div className={`bg-home_bg02  `}>
    <Navbar />
    <div className='text-white mt-[112px] lg:mt-[0px] lg:pt-[112px]'>
            <Details />
    </div>
  </div>
  )
}
