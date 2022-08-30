import React,{useState,useEffect} from 'react'
import logo from '../../assets/home/logo.png'
import header_bottom from '../../assets/home/header_bottom_shape.png'
import { faSearch,faBars, faAngleDown,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { style, styled } from '@mui/system'
export default function Navbar() {
    const [mobileMovie, setMobileMovie] = useState(false);
    const [mobileTvShow, setmobileTvShow] = useState(false);
    const [navMobile, setnavMobile] = useState(false);
    const [navBarScroll,setnavBarScroll] = useState(false);   
    const [navBarScroll2,setnavBarScroll2] = useState(true);   

    
    const changeNavBar =() =>{
      
        if(window.scrollY >= 500){
            setnavBarScroll(true)
            setnavBarScroll2(false)
            
        }
       
        else if (window.scrollY <= 200) {
            setnavBarScroll2(true)
            setnavBarScroll(true)
        }
       
        else{
            setnavBarScroll(false)
        }
    }   
    useEffect(()=>{
        changeNavBar()
    },[])
    window.addEventListener('scroll',changeNavBar)
    
    
  return (
    <div className={`block bg-blue-darken navbar w-full z-20    transition-all duration-[2000ms]   ${navBarScroll ? ' -translate-y-0 after:content-none' : '-translate-y-full '} ${navBarScroll2 ? ' relative duration-[0s] after:content-[""]' :'fixed '}` }>
        <div className={`flex  text-white py-2 px-4 items-center justify-start relative flex-wrap mx-11 lg:justify-around lg:py-5`}>
            <div className={`basis-1/8`}><img className='max-w-none'  src={logo}></img></div>
            <div className={`basis-3/6  grow lg:hidden`}>
                <div className='flex flex-row flex-wrap basis-3/4'>
                    <p className='ml-auto px-6 py-9 font-extrabold hover:text-yellow-color'>HOME</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>MOVIE</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>TV SHOW</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>BLOG</p>
                    <p className='px-6 py-9 font-extrabold hover:text-yellow-color'>CONTACT</p>
                </div>
            </div>
            <div className={`basis-1/6 block  relative`}>
                <div className={`flex  items-center  basis-2/3 relative`}>
                    <div className='relative'>
                        <form className='relative xl:hidden '>
                            <input className='bg-black-color pl-5 pr-16 py-3 rounded-[30px]' type="text" placeholder="Find Favorite Movie"></input>
                            <p className='text-yellow-color absolute top-1/2 right-6 translate-y-[-50%]'><FontAwesomeIcon icon={faSearch}/></p> 
                    </form>
                    </div>
                    <div className='flex items-center '>
                        <p className={`w-32 py-2 font-extrabold px-6 bg-black-color rounded-full border-2 border-[#e4d804] hover:text-black-color hover:bg-yellow-color ml-9 md:hidden`}>SIGN IN</p>
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
