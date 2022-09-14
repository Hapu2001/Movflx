import React,{useEffect} from 'react'
import { Rating } from '@mui/material';
import AOS from 'aos';
import { useDispatch} from 'react-redux'
import {addBookmark, usersSlice} from '../../store/Slice/UserSlice'
import {auth} from '../../shared/firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import {   toast } from 'react-toastify';
import { useSelector } from 'react-redux'
import {  useLocation, Link } from "react-router-dom";
export default function CardFilm(props) {
  
  const [user,loading,error] = useAuthState(auth);
  const item = props.item;
  const dispath = useDispatch();
  const bookmark =  useSelector(state=>state.bookmark)

  const location = useLocation();
  const handleAdd = (item)=>{
      if(user){
        const check = bookmark.find(item2 => item2.id === item.id ); 
        if(check){
          toast.info('Film is delete in Bookmark')
          dispath(usersSlice.actions.deleteBookmark(item))
          console.log(item)
        } 
        else{
          toast.success('Film added successfully')
          dispath(usersSlice.actions.addBookmark(item))
        }
      }else{
        toast.info('Need login to use')
      }
    } 
  useEffect(()=>{
    
  },[bookmark])
  const deleteBookmark = (id)=>{
   
  }
  return (
    <div className='mr-11 w-56 relative card-container md:mx-auto  '>
        <div className='bg-black-color p-4'>
            <div className='mb-6 relative'>
              <img className='card-img' src={`https://image.tmdb.org/t/p/original${item.poster_path}`}></img>
              <div className='card-details absolute  text-center left-1/2 top-1/2 -translate-y-1/2 w-32 -translate-x-1/2 opacity-0 '>
                <p className='btn px-0 mb-3 bg-yellow-color border-none text-black-color -translate-y-1/2 transition-all duration-1000 card-btn opacity-0 ' 
                   onClick={()=>{handleAdd(item)}}
                >{(bookmark.find(film=>film.id === item.id)) ? 'Film is available ' :'Add bookmark' }</p>
                <Link to={`/${item.id}`}> <p className='btn px-0 mt-3 border-yellow-color opacity-0 text-white translate-y-1/2 transition-all duration-1000 card-btn'  
                  
                >Details</p></Link>
               
              </div>
              </div>
            <div>
                <div className='mb-3 text-center'>
                  <Rating  defaultValue={item.vote_average/2} precision={0.5} readOnly size='small'  /> 
                </div>
                <h5 className='text-base font-semibold text-center mb-3 text-ellipsis w-48 overflow-hidden whitespace-nowrap text-white'
                onClick={()=>{deleteBookmark(item.id)}}
                >
                  {item.name || item.title}</h5>
                <div className='flex justify-center'>
                        
                </div>
            </div>
        </div>
       
    </div>
  )
}
