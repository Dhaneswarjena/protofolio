import React,{useState} from 'react'
import Header from './Component/Header'
import { Headerphone } from './Component/Header'
import Home from './Component/Home'
import './Styles/App.scss'
import Work from './Component/Work'
import Timeline from './Component/Timeline'
import Services from './Component/Services'
import Testimonial from './Component/Testimonial'
import Contact from './Component/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './Component/Footer'
const App = () => {
  const[menuopen,setmenuopen]=useState(false)
  // const [ratio,setratio]=useState(window.innerWidth/window.innerHeight)
  // useEffect(()=>{
  //   const resizeratio=()=>{
  //     setratio(window.innerWidth/window.innerHeight)
  //   }
  //   window.addEventListener('resize',resizeratio)
  // return ()=>{
  //   window.removeEventListener('resize',resizeratio)
  // }
  // },[ratio]);
  return(
    <>
    <Headerphone menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Header menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Home/>
      <Work/>
      <Timeline/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>

)}

export default App