import React,{useEffect, useState,useRef} from 'react'
import CardFilm from '../commons/CardFilm'
import axios from 'axios'
import request from '../../shared/Requests'
import { Swiper, SwiperSlide } from "swiper/react"
import {  Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Popular() {
   
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const [popularTV, setPopularTV] = useState([])
    const [pupularMovie,setPopularMovie] = useState([])
    const [tab,setTab] = useState(true)
    useEffect(()=>{
        axios.all([
            axios.get(request.requestTvPopular),
            axios.get(request.requestMoviePopular)
        ])  
        .then(axios.spread((data1,data2)=>{
                setPopularTV(data1.data.results);
                setPopularMovie(data2.data.results);
        }))
    },[request.requestTvPopular, request.requestMoviePopular])
  return (
    <div className="bg-home_bg02 text-white py-32 bg-center">
        <div className="px-4 mx-20 md:mx-0">
            <div className='flex items-end mb-14 flex-wrap relative '>
                <div className='basis-1/2 pb-7 header_popular relative  md:basis-full md:text-center after:md:mx-auto '>
                    <span className="mb-3 text-[#bcbcbc] font-semibold text-xs">ONLINE STREAMING</span>
                    <h2 className='text-4xl font-bold md:text-3xl'>Popular Movies</h2>
                </div>
                <div className='basis-1/2 flex items-end md:flex-wrap md:basis-full justify-center '>
                    <div className='flex  w-full  md:justify-center md:mb-4'>
                        <p className={'btn mr-3 mt-3 ml-auto md:ml-0  '} onClick={()=>{setTab(true)}}>TV Show</p>
                        <p className="btn mr-3 mt-3" onClick={()=>{setTab(false)}}>Movies</p>
                       
                    </div>
                    <div className='flex  btn py-2 px-5  h-14 '>
                            <p ref={navigationPrevRef}  className='pre font-black relative pr-4  leading-9'>  <FontAwesomeIcon  className='mr-2 ' icon={faAngleLeft}/></p>
                            
                            <p ref={navigationNextRef} className='leading-9' >  <FontAwesomeIcon  className='ml-5 font-black' icon={faAngleRight} /></p>
                      </div>
                </div>
            </div>
            <div>
                <Swiper className="flex mySwiper swiper "
                         breakpoints={{
                            300: {
                                slidesPerView: 1,
                              },
                            576: {
                          
                              slidesPerView: 2,
                            },
                            800: {
                          
                              slidesPerView: 5,
                            },
                          }} 
                        
                        spaceBetween={40}
                        loop={true}
                        centerSlider={true}
                        fade={true}
                        gragCursor={true}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                          }}
                          onBeforeInit={(swiper) =>{
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                       }}
                        modules={[ Navigation]}
                       
                        
       >
                        { tab=== true ? (popularTV.map((item)=>{
                    return(
                        <SwiperSlide key={item.id}>
                            <CardFilm className=''
                                item={item}
                            />
                        </SwiperSlide>
                        )})) :(
                            pupularMovie.map((item)=>{
                            return(
                                <SwiperSlide key={item.id}>
                                    <CardFilm 
                                        item={item}
                                    />
                                </SwiperSlide>
                                )}))  }
               
                </Swiper>
               
                
            </div>
        </div>
    </div>
  )
}
