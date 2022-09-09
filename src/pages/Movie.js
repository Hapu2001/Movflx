import React from 'react'
import BannerDetail from '../components/commons/BannerDetail'
import ListFilm from '../components/commons/ListFilm'
import Navbar from '../components/commons/Navbar'

export default function Movie() {
 
  return (
    <div className='overflow-x-hidden' >
       <Navbar  />
        <BannerDetail />
        <ListFilm />
    </div>
  )
}
