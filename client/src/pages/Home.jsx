import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ProductListing from './ProductListing'
import Footer from '../components/Footer'
import SortSection from '../components/SortSection'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <SortSection/>
      <ProductListing/>
      <Footer/>
      
    </div>
  )
}

export default Home
