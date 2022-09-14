import React,{useEffect, useState} from 'react'
import { faPlay,faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
import slide from '../../assets/home/slider_img02.jpg'



export default function Banner() {
  
    


    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
   
  return (
    <div className={'bg-banner bg-cover py-32 text-white z-10'}>
        <div className={'px-4 mx-20 relative md:mx-0'}>
            <div className={'flex relative items-center flex-wrap-reverse'}>   
                <div   className={'basis-1/2 md:basis-full md:mt-5'}>
                        <p className='mb-2 font-bold text-3xl text-yellow-color'  data-aos="fade-up">Movflx</p>
                        <h2 className='font-bold text-6xl mb-7 md:text-5xl '  data-aos="fade-up">Unlimited <span className='text-yellow-color'> Movie</span>, TV Shows, & More.</h2>
                    <div className='mb-10 flex font-bold'  data-aos="fade-up">
                        <p className='mr-4 mb-3'>
                            <span className='bg-white text-black px-3 py-[6px] '>PG 18</span>
                            <span className='bg-black-color  px-3 py-1 ml-2 border-2 text-white'>HD</span>
                        </p>
                        <p className='mr-4 mb-3'>
                            <span>Adventure</span>
                            <span>, Action</span>
                        </p>
                        <p> <span className='text-yellow-color mr-2'><FontAwesomeIcon icon={faCalendarAlt } /></span>2022</p>
                    </div>
                    <div data-aos="fade-up">
                    <span className={'btn cursor-pointer border-yellow-color'} >
                            <FontAwesomeIcon  className='mr-2 ' icon={faPlay} /> WATCH NOW
                    </span>
                    </div>
                </div>
                <div className={'basis-1/2 md:basis-full'} data-aos="fade-left">
                    <img className='md:mx-auto' src={slide}></img>
                </div>
            </div>
        </div>
    </div>
  )
}
