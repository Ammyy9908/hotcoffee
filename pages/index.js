import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Hero from '../components/Hero/Hero'
import LatestPostCard from '../components/LatestPost/LatestPostCard'
import Navbar from '../components/Navbar/Navbar'
import PostCard from '../components/PostCard/PostCard'
import UniquePost from '../components/UniquePost/UniquePost'
import styles from '../styles/Home.module.css'
import {MdArrowDropDown} from "react-icons/md"
import Footer from '../components/Footer/Footer'
import AuthPopup from '../components/AuthPopup/AuthPopup'
import AppContext from '../store/_appContext'


export default function Home() {

  const {auth_modal} = React.useContext(AppContext)
  
  return (
    <div className={`${styles.container} ${auth_modal && "overflow-hidden"}`}>

      <AuthPopup/>
      <Head>
        <title>HotCoffee</title>
        <link rel="icon" href="/coffee.svg"/>
      </Head>
      <Navbar/>
      <Hero/>
      <section className={`blog-section ${auth_modal && "overflow-hidden"}`}>
          <LatestPostCard/>
          <div className='posts'>
            <PostCard image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"/>
            <PostCard image="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"/>
            <PostCard image="https://images.unsplash.com/photo-1556636530-6b7482d80e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <PostCard image="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
          </div>

          <div style={{marginTop:'25px'}}>
            <UniquePost/>
          </div>
          <div className='blank_section'>
              <a href="#top">See more <MdArrowDropDown/></a>
          </div>
      </section>

      <Footer/>
    </div>
  )
}
