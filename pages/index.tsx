import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Apropos from '../Components/Apropos'
import Intervention from '../Components/Intervention'
import Link from 'next/link'
import CoursCo from '../Components/CoursCo'
import Enligne from '../Components/Enligne'
import Lasauvagere from '../Components/Lasauvagere'
import Footer from '../Components/Footer'


const Home: NextPage = () => {
  return (
    <div className= "">
      <Head>
        <title>360Vitality</title>
        <link rel="icon" href="/favicon.ico" />          
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <main className='relative top-0'>
        <Hero/>
        <Apropos/> 
        <Intervention/> 
        <CoursCo/> 
        <Enligne/>
        <Lasauvagere/> 
         </main>

        <footer>
          <Footer/>
        </footer>
        
      
      
    </div>
  )
}

export default Home
