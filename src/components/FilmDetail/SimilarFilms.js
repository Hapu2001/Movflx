import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import CardFilm from '../commons/CardFilm'
export default function SimilarFilms( id) {
    const [filmSimilars,setFilmSimilars] =useState([])
    const requestSimilar = `https://api.themoviedb.org/3/movie/${id.id.id}/similar?api_key=6cd3158a79f8308025968b023f2a09cf&language=en-US&page=1`
    useEffect(()=>{
    axios.get(requestSimilar)
    .then((res)=>{
        setFilmSimilars(res.data.results)
    })
    .catch((err)=>{console.log(err)})
    },[requestSimilar])
    
  return (
    <div>
         <div className='flex flex-wrap justify-center pl-10'>
            {filmSimilars.slice(0,4).map((item)=>{
                return(
                    <div className='my-3 basis-1/2' key={item.id}>
                        <CardFilm  item={item}>
                        </CardFilm>
                    </div>
                )
            })}
         </div>
    </div>
  )
}
