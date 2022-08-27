import React,{useEffect} from 'react'
import { Rating } from '@mui/material';
import AOS from 'aos';
export default function CardFilm(props) {

 
  const moviePopular = props.item;
  console.log(moviePopular);
  return (
    <div className='mr-11 w-56 relative card-container'>
        <div className='bg-black-color p-4'>
            <div className='mb-6 relative'>
              <img className='card-img' src={`https://image.tmdb.org/t/p/original${moviePopular.poster_path}`}></img>
              <div className='card-details absolute  text-center left-1/2 top-1/2 -translate-y-1/2 w-32 -translate-x-1/2 opacity-0 '>
                <p className='btn px-0 mb-3 bg-yellow-color border-none text-black-color -translate-y-1/2 transition-all duration-1000 card-btn opacity-0 ' >Watch Now</p>
                <p className='btn px-0 mt-3 border-yellow-color opacity-0   translate-y-1/2 transition-all duration-1000 card-btn'  >Details</p>
              </div>
              </div>
            <div>
                <div className='mb-3 text-center'>
                  <Rating  defaultValue={moviePopular.vote_average/2} precision={0.5} readOnly size='small' /> 
                </div>
                <h5 className='text-base font-semibold text-center mb-3 text-ellipsis w-48 overflow-hidden whitespace-nowrap'>
                  {moviePopular.name || moviePopular.title}</h5>
                <div className='flex'>
                        <p className='bg-[#02050a] px-3 py-2 text-blue-darken font-black text-xs mr-2'>Action</p>
                        <p className='bg-[#02050a] px-3 py-2 text-blue-darken font-black text-xs'>Adventure</p> 
                </div>
            </div>
        </div>
       
    </div>
  )
}
