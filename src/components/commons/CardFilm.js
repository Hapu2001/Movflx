import React,{useEffect, useState} from 'react'
import { Rating } from '@mui/material';
import AOS from 'aos';
import { useDispatch} from 'react-redux'
import {addBookmark, usersSlice} from '../../store/Slice/UserSlice'
import {useAuthState} from 'react-firebase-hooks/auth'
import {   toast } from 'react-toastify';
import { useSelector } from 'react-redux'
import {  useLocation, Link,useNavigate } from "react-router-dom";
import {auth,db} from '../../shared/firebase.js'
import { doc, updateDoc,arrayUnion,getDoc,arrayRemove } from "firebase/firestore";




  
export default function CardFilm(props) {
  const [user,loading,error] = useAuthState(auth);
  const item = props.item;
  const dispath = useDispatch();
  const bookmark =  useSelector(state=>state.bookmark)
  const location = useLocation();
  const addFilmFireStore = async (film)=>{
    try{
      const addBookmark = doc(db,'users',user.uid);
      await updateDoc(addBookmark,{
        bookmark: arrayUnion(film)
        })
      }
    catch(err){ 
        console.log(err);
        }
    }
  const deleteFilmStore = async (film)=>{
    try{
      const addBookmark = doc(db,'users',user.uid);
      await updateDoc(addBookmark,{
        bookmark: arrayRemove(film)
        })
    }
    catch(err){
      console.log(err);
    }
  }
  const handleAdd = async (item)=>{
      if(user){
        try{ 
          const docRef = doc(db, 'users',user.uid);
          const docSnap = await getDoc(docRef);
          let checkFilm = docSnap.data().bookmark.some((item2)=>item2.id === item.id)
          if(checkFilm){
            toast.info('Film delete successfully')
            
            deleteFilmStore(item)
          } 
          else{
            toast.success('Film added successfully')
            
            addFilmFireStore(item)
          }
        } 
        catch(err){}
      }else{
        toast.info('Need login to use')
      }
    } 
    const [listFilm,setListFilm] = useState([]);
    const getFilm = async ()=>{
      try {
        const docRef = doc(db, 'users',user.uid);
        const docSnap = await getDoc(docRef);
        await setListFilm([...docSnap.data().bookmark])
       
      }
      catch (err) {
        console.error(err);
      }
    }
 
    useEffect(()=>{
      getFilm();
      
    },[listFilm])
    console.log(listFilm);

  return (
    <div className='mr-11 w-56 relative card-container md:mx-auto'>
        <div className='bg-black-color p-4 rounded-md'>
            <div className='mb-6 relative'>
              <img  className='card-img rounded-md' src={`https://image.tmdb.org/t/p/original${item.poster_path}`}></img>
              <div className='card-details absolute  text-center left-1/2 top-1/2 -translate-y-1/2 w-32 -translate-x-1/2 opacity-0 '>
                <p className='btn px-0 mb-3 bg-yellow-color border-none text-black-color -translate-y-1/2 transition-all duration-1000 card-btn opacity-0 ' 
                   onClick={()=>{handleAdd(item) 
              
                  }}
                >{(listFilm.find(film=>film.id === item.id)) ? 'Film is available ' :'Add bookmark' }</p>
                <Link to={`/${item.id}`}> <p className='btn px-0 mt-3 border-yellow-color opacity-0 text-white translate-y-1/2 transition-all duration-1000 card-btn'  
                >Details</p></Link>
              </div>
              </div>
            <div>
                <div className='mb-3 text-center'>
                  <Rating  defaultValue={item.vote_average/2} precision={0.5} readOnly size='small'  /> 
                </div>
                <h5 className='text-base font-semibold text-center mb-3 text-ellipsis w-48 overflow-hidden whitespace-nowrap text-white'
                
                >
                  {item.name || item.title}</h5>
                <div className='flex justify-center'>
                        
                </div>
            </div>
        </div>
       
    </div>
  )
}
