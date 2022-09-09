import axios from 'axios';
import React,{useState,useEffect} from 'react'
import CardFilm from '../components/commons/CardFilm';
import Navbar from '../components/commons/Navbar'

export default function Search() {
  const [search,setSearch] = useState("");
  const requestSearch = `https://api.themoviedb.org/3/search/movie?api_key=6cd3158a79f8308025968b023f2a09cf&language=en-US&page=1&include_adult=false&query=${search}`
  const [listSearch,setListSearch] = useState([])
 
  
  const handleSearch = (e)=>{
    setSearch(e)
  }
  useEffect(()=>{
    try{
    axios.get(requestSearch)
    .then((res)=>{
      setListSearch(res.data.results);
    })
  }catch(e){
    console.log(e);
  }
  },[requestSearch,listSearch])

  return (
    <div className={`bg-home_bg02 mt-[112px] h-screen pt-10 pb-10`}>
      <Navbar handleSearch ={handleSearch} />
      <div className='flex flex-wrap justify-center'>
      {listSearch.map((item)=>{
            return (
                <div className='mb-5 md:basis-1/2' key={item.id}>
                        <CardFilm 
                            item={item}/>
                          
                </div>
            )
        })}
        </div>
    </div>
  )
}
