import React from 'react'
import Navbar from '../components/commons/Navbar'
import Banner from '../components/Home/Banner'
import Popular from '../components/Home/Popular'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Banner />
      <Popular />
      
    </div>
  )
}
