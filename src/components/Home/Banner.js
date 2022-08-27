import React,{useEffect, useState} from 'react'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
import slide from '../../assets/home/slider_img02.jpg'


export default function Banner() {

    


    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
   
  return (
    <div className={'bg-banner bg-cover py-32 text-white'}>
        <div className={'px-4 mx-20 relative'}>
            <div className={'flex relative items-center'}>   
                <div   className={'basis-1/2 '}>
                        <p className='mb-2 font-bold text-3xl text-yellow-color'  data-aos="fade-up">Movflx</p>
                        <h2 className='font-bold text-6xl mb-7'  data-aos="fade-up">Unlimited <span className='text-yellow-color'> Movie</span>, TV Shows, & More.</h2>
                    <div className='mb-10 flex font-bold'  data-aos="fade-up">
                        <p className='mr-4 mb-3'>
                            <span className='bg-white text-black px-3 py-[6px] '>PG 18</span>
                            <span className='bg-black-color  px-3 py-1 ml-2 border-2 text-white'>HD</span>
                        </p>
                        <p className='mr-4 mb-3'>
                            <span>Romance</span>
                            <span>,Drama</span>
                        </p>
                        <p>Date</p>
                    </div>
                    <div data-aos="fade-up">
                    <span className={'btn'} >
                            <FontAwesomeIcon  className='mr-2' icon={faPlay} /> WATCH NOW
                    </span>
                    </div>
                </div>
                <div className={'basis-1/2 '} data-aos="fade-left">
                    <img src={slide}></img>
                    </div>
            </div>
        </div>
    </div>
  )
}
