import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import SimilarFilms from './SimilarFilms';
import Review from './Review';
export default function Details() {
    const id = useParams();
    const [detail,setDetails] = useState([])
    const [genres,setGenres] = useState([])
    const [trailer, setTrailer]= useState([])
    const [photos, setPhotos] = useState([])
    const [commentOrPhotos, setCommentOrPhotos] = useState(false)
    const requestDetail = `https://api.themoviedb.org/3/movie/${id.id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`
    useEffect(()=>{
    axios.get(requestDetail)
    .then((res) =>{
        setDetails(res.data)
        setGenres(res.data.genres)
        setTrailer(res.data.videos.results[0])
        setPhotos(res.data.production_companies)
    })
    .catch((err) => console.log(err))
    },[requestDetail])
   
  return (
    <div>
        <div className='py-[70px] w-full lg:py-5 lg:py-[0px]'>
            <div className='text-3xl mx-[120px] lg:mx-0 my-5'>{detail.original_title}</div>
            <div className='flex mx-[120px] mb-[70px]  lg:mx-0 lg:flex-wrap '>
                   <div className='basis-1/2 flex px-3 lg:basis-full lg:justify-center sm:flex-col' >
                        <div>
                            <div >
                                <div className='max-w-[250px] sm:mx-auto'><img className='rounded-md' src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}></img></div>
                                <div className='rounded-md btn text-center text-lg  mt-4 border-yellow-color'>Watch Trailer</div>
                            </div>
                        </div>
                        <div className='mx-7 flex flex-col'>
                            <p className='my-2'>RunTime: {detail.runtime} Min </p>
                            <p className='flex my-2'>Genres 
                                {genres.map((item,index)=> {
                                    return (
                                        <p key={item.id}>
                                            {index === 0 ? " :" : ","}{" "} {item.name} 
                                        </p>
                                    )
                                })} 
                            </p>
                            <p className='my-2'>Popularity: {detail.popularity} </p>
                            <p className='my-2'>Release date: {detail.release_date} </p>
                            <div className='bg-black-color h-[200px] px-4 py-4 w-[280px] rounded-md  overflow-y-scroll mt-auto  details__div-review'>
                                <div className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 px-7 self-center lg:basis-full lg:my-5'>
                       {trailer ? ( <iframe src={`https://www.youtube.com/embed/${trailer.key}`}
                                width="100%"
                                height="350px"
                               
                        ></iframe> ):(<p className="text-5xl">Trailers are not available
                            </p>)}
                    </div> 
            </div>
            <div className='mx-[120px] lg:mx-0'>
                <div className='px-3 w-full'>
                    <div className='text-[36px] mb-3'>Discover</div>
                    <div className='flex my-3'>
                        <p className={`mr-3 cursor-pointer ${commentOrPhotos===false && 'text-yellow-color'}`} onClick={()=>{setCommentOrPhotos(false)}}>COMMENTS</p>
                        <p className={`mr-3 cursor-pointer ${commentOrPhotos===true && 'text-yellow-color'}`}onClick={()=>{setCommentOrPhotos(true)}}>PHOTOS</p>
                    </div>
                    <div className='flex lg:flex-wrap'>
                        
                        {commentOrPhotos ? (<div className='basis-3/6 flex flex-wrap px-10 content-start '>
                           {photos.map((photo)=>{
                            return(
                               <p key={photo.id} className='basis-1/2 '  > 
                                 <img className='w-[240px]'  src={`https://image.tmdb.org/t/p/original/${photo.logo_path}`}>
                                </img>      
                               </p>
                            )})}
                           
                        </div>) : (<div className='basis-3/6 lg:basis-full'>
                            <Review />
                       </div> )}
                       
                        <div className='basis-1/2 px-3 lg:basis-full'> 
                            <div className='text-3xl mb-5'>You may also like...</div>
                            <div>
                                <SimilarFilms id={id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
