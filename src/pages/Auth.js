import React,{useState} from 'react'
import SignIn from '../components/Auth/SignIn'
import video from '../assets/Video/trailer.mp4'
import SignUp from '../components/Auth/SignUp'


export default function Auth() {
  const [show,setShow] = useState(true)
  return (
    <div className="text-white">
        <div className="fixed h-full w-full bg-black z-[2] opacity-80">
        </div>
         <video className="w-full fixed lg:hidden"  muted
                autoPlay
                 loop>
            <source  src={video} type="video/mp4" />
        </video>

        {show ? (<SignIn setShow={setShow} />) : 
        (<SignUp setShow={setShow} />)}
    </div>
  )
}
