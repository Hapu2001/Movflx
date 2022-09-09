import React, { useEffect } from 'react'
import Navbar from '../components/commons/Navbar'
import {} from '../store/store'
import { useSelector } from 'react-redux'
import CardFilm from '../components/commons/CardFilm'
import {auth} from '../shared/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'


export default function BookMark() {
  const bookmark =  useSelector(state=>state.user)
  const [user,loading,error] = useAuthState(auth);
  useEffect(()=>{
   try
   { localStorage.setItem(`${user.uid || ""}`, JSON.stringify(bookmark))}
   catch (e) {
      console.log(e)
   }
  },[bookmark,user])
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
