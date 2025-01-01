import React from 'react'
import Banner from '../../components/home/Banner/Banner'
import BannerBottom from '../../components/home/Banner/BannerBottom'
import Books from '../../components/home/Books/Book'
import YearProduct from '../../components/home/YearProduct/YearProduct'

function Home() {
  return (
    <>
   
    <Banner />
    <BannerBottom/>
    <Books name={"Horror"}/>
    <YearProduct/>
    <Books name={"Fantasy"}/>
    <Books name={"Romance novel"}/>
    </>
  )
}

export default Home