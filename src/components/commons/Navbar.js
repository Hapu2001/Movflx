import React,{useState,useEffect} from 'react'
import logo from '../../assets/home/logo.png'
import header_bottom from '../../assets/home/header_bottom_shape.png'
import { faSearch,faBars, faAngleDown,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { style, styled } from '@mui/system'
import { Link, useLocation,useNavigate } from "react-router-dom";
import {   ToastContainer,toast } from 'react-toastify';

import {auth,logout} from '../../shared/firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'

export default function Navbar() {

    const [mobileMovie, setMobileMovie] = useState(false);
    const [mobileTvShow, setmobileTvShow] = useState(false);
    const [navMobile, setnavMobile] = useState(false);
    const [prevScrollPos, setPreScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const location = useLocation() 
    const history = useNavigate();
    const [profile,setProfile]= useState(false);

    const [user,loading,error] = useAuthState(auth);
    
   
    const handleScroll = () =>{
        const currentScrollPos = window.scrollY
        if(currentScrollPos <150){
            setVisible(true)
        }
        else{
            if(currentScrollPos > prevScrollPos)
            {
                setVisible(false)
            }
            else {
                setVisible(true)
            }
        }
        setPreScrollPos(currentScrollPos)
    }
    const handleBookmark = (destinationUrl) =>{
       
        if(!user){
           
            toast.info('Need login')
            return
        }   
            history(destinationUrl)
        }
              
    useEffect(()=>{
       
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll)
    })
    useEffect(()=>{ window.scrollTo({ top: 0 });},[location])
    useEffect(()=>{
        if (loading) return
       
    })
    
    
    return (
        <div className={`block bg-blue-darken navbar w-full z-20    transition-all duration-500 fixed ${visible ? 'top-0' :'-top-[112px]'}`}>
            <div className={`flex  text-white py-2 px-4 items-center justify-start relative flex-wrap mx-11 lg:justify-around lg:py-5`}>
                <div className={`basis-1/8`}><img className='max-w-none'  src={logo}></img></div>
                <div className={`basis-3/6  grow lg:hidden`}>
                
                    <div className='flex flex-row flex-wrap basis-3/4'>
                    <Link className='ml-auto' to="/">   <p   className={`${location.pathname === "/" && 'text-yellow-color'}  ml-auto px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`} >HOME</p></Link>
                    <Link to="/movies"><p  className={`${location.pathname === "/movies" && 'text-yellow-color'} px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`} >MOVIE</p></Link>
                    <Link to="/">      <p   className={`px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`} >TV SHOW</p></Link>
                    <p onClick={()=>handleBookmark("/bookmark")}>      <p   className={`px-6 py-9 font-bold hover:text-yellow-color cursor-pointer`} 
                            
                    >BOOKMARK</p></p>
                    
                    </div>
                </div>
                <div className={`basis-1/6 block  relative`}>
                    <div className={`flex  items-center  basis-2/3 relative`}>
                        <div className='relative'>
                            <form className='relative xl:hidden '>
                                <input className='bg-black-color pl-5 pr-16 py-3 rounded-[30px]' type="text" placeholder="Find Favorite Movie"
                                
                                ></input>
                                <p className='text-yellow-color cursor-pointer absolute top-1/2 right-6 translate-y-[-50%]'
                                onClick={()=>{history('/search')}}
                                ><FontAwesomeIcon icon={faSearch}/></p> 
                        </form>
                        </div>
                        <div className='flex items-center '>
                             
                             {(user) ? 
                                (<div className='relative cursor-pointer ml-5'>
                                    <p className='w-[50px] h-[50px] bg-white rounded-full header-profile' onClick={()=>{{profile ? setProfile(false) : setProfile(true)}}}></p>
                                    <div className='w-[95px] h-[30px] absolute left-1/2 -translate-x-1/2 '></div>
                                    <div  className={`bg-blue-darken absolute left-1/2 -translate-x-1/2 mt-4 transition-all duration-500 overflow-hidden ${profile ? 'max-h-24' : 'max-h-0'}`}>
                                        <div className='order-white border px-2 py-3 '>
                                            <p className=''>Profile</p>
                                            <p className='w-[80px]  mt-2' onClick={()=>{logout(auth)}}>Log out</p>
                                        </div>
                                    </div>
                                </div>) : 
                                (<Link to='/auth'> 
                                <p className={`w-32 py-2 font-bold px-6 bg-black-color rounded-full border-2 cursor-pointer border-[#e4d804] hover:text-black-color hover:bg-yellow-color ml-9 md:hidden`}>SIGN IN
                                </p>
                                </Link>)
                            }
                            <p  className='ml-8 text-3xl cursor-pointer min-xl:hidden '  
                                onClick={()=>{ navMobile===true ? setnavMobile(false): setnavMobile(true)}} >
                                <FontAwesomeIcon icon={faBars}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={`fixed text-white z-40 top-0 right-0 w-[300px] h-[100vh] bg-[#171d22] overflow-x-hidden transition-all duration-1000 ${navMobile===true ? 'translate-x-0': 'translate-x-full'} `}>
                <div>
                    <div className='px-6 py-8 flex justify-between items-center'>
                        <img className='max-w-none' src={logo}></img>
                        <p className='text-xl font-bold cursor-pointer' onClick={()=>{ navMobile===true ? setnavMobile(false): setnavMobile(true)}}><FontAwesomeIcon className='font-black' icon={faTimes} /></p> 
                    </div>
                    <div>
                        <p className='flex px-7 py-3 border-t-[1px] border-[#ffffff1a]'>
                            <p className='mr-32'>Home</p>
                        </p>
                        <p className='flex px-7 py-3 border-t-[1px] border-[#ffffff1a]'>
                            <p >Movie</p>
                            <p className='bg-blue-darken w-8 h-8 leading-8 text-center ml-auto' onClick={()=>mobileMovie ===true ? setMobileMovie(false): setMobileMovie(true)}><FontAwesomeIcon icon={faAngleDown} /></p>
                        </p>
                            <p className={`  overflow-hidden test ${mobileMovie === true ? ' max-h-24 ' : 'max-h-0 '}`}>
                                <p className='px-14 py-3 border-t-[1px] border-[#ffffff1a]'>Movie</p>
                                <p className='px-14 border-t-[1px] border-[#ffffff1a] px-7 py-3'>Movie Details</p>
                            </p>

                    
                        
                        <p className='flex px-7 py-3 border-t-[1px] border-[#ffffff1a]'>
                            <p className='mr-32'>Tv Show</p>
                            <p className='bg-blue-darken w-8 h-8 leading-8 text-center ml-auto' 
                                onClick={()=>{mobileTvShow ===true ? setmobileTvShow(false): setmobileTvShow(true)}}
                            ><FontAwesomeIcon icon={faAngleDown} />
                        </p>
                            
                        </p>
                        <p className={` overflow-hidden test ${mobileTvShow=== true ? ' max-h-24 ' : 'max-h-0 '}`}>
                                <p className='px-14 py-3 border-t-[1px] border-[#ffffff1a] '>Tv Show</p>
                                <p className='px-14 border-t-[1px] border-[#ffffff1a] px-7 py-3'>Tv Show Details</p>
                        </p>
                    
                        <p className='flex px-7 py-3 border-t-[1px] border-[#ffffff1a]'>Blog</p>
                        <p className='flex px-7 py-3 border-t-[1px] border-[#ffffff1a]'>Contact</p>
                    </div>
                    <div className='px-6 py-8 border-t-[1px] border-[#ffffff1a]'>
                        <p>Social</p>
                    </div>
                </div>
            </div>
            <div className={`h-[100vh] w-full bg-[rgba(23,29,34,0.8)] fixed top-0 z-30  ${navMobile ? '' : 'hidden'}`}></div>
        </div>
    
    )
}
