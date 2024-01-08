import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
const Header = ({menuopen,setmenuopen}) => {
  
  return (
    <>
    <nav>
       <Navcontent setmenuopen={setmenuopen}/>
     
    </nav>
    <button className="navBtn" onClick={()=>setmenuopen(!menuopen)}>
          <AiOutlineMenu/>
    </button>
    </>
  )
}
export const Headerphone = ({menuopen,setmenuopen}) => {
  return (
    <div className={`navphone ${menuopen?'navphonecome':''}`}>
        <Navcontent setmenuopen={setmenuopen}/>
    </div>
  )
}
const Navcontent=({setmenuopen})=>{
  return(<>
    <h2>Dhaneswar</h2>
        <div>
            <a href="#home" onClick={()=>setmenuopen(false)}>Home</a>
            <a href="#work" onClick={()=>setmenuopen(false)}>Work</a>
            <a href="#experience" onClick={()=>setmenuopen(false)}>Experience</a>
            <a href="#service" onClick={()=>setmenuopen(false)}>Services</a>
            <a href="#testimonial" onClick={()=>setmenuopen(false)}>Testimonial</a>
            <a href="#contact" onClick={()=>setmenuopen(false)}>Contact</a>
        </div>
        <a onClick={()=>setmenuopen(false)} href="mailto:dhaneswarjena18@gmail.com">
            <button>Email</button>
        </a>
  </>)
}
export default Header