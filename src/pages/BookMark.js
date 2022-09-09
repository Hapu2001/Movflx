import React from 'react'
import Navbar from '../components/commons/Navbar'
import {} from '../store/store'
import { useSelector } from 'react-redux'
import CardFilm from '../components/commons/CardFilm'


export default function BookMark() {
  const bookmark =  useSelector(state=>state.user.bookmark)
  
  return (
   
    <div className={`bg-home_bg02 mt-[112px] ${bookmark.length >5 ? 'h-auto' : 'h-screen'} pt-10 pb-10`}>
      <Navbar />
      <div className=''>
      <div className='flex flex-wrap justify-center'>
      {bookmark?.map((item)=>{
            return (
                <div className='mb-5 md:basis-1/2' key={item.id}>
                        <CardFilm 
                            item={item}/>
                          
                </div>
            )
        })}
        </div>
      </div>
    </div>
  )
}
