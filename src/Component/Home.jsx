import React, { useRef } from 'react'
import Typewriter from 'typewriter-effect'
import {animate, motion} from 'framer-motion'
import me from '../Assets/Logo.png'
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
const Home = () => {
    const span100=useRef(null)
    const span500=useRef(null)
    const counter100=(v)=>{
         animate(0,100,{
            duration:1,
            onUpdate:(v)=>(span100.current.textContent=v.toFixed())
         })
    }
    const counter500=(v)=>{
        animate(0,500,{
           duration:1,
           onUpdate:(v)=>(span500.current.textContent=v.toFixed())
        })
   }
    const animation={
         h1:{
           initial:
           {
             x:'-100%',
            opacity:0
         },
         whileInView:{
            x:0,
            opacity:1
         }
         },
         button:{
            initial:{
                y:'-100%',
                opacity:0
            },
            whileInView:{
              y:0,
              opacity:1
            }
         }
    }
  return (
    <div id="home">
     <section>
        <div>
        <motion.h1 {...animation.h1}>
        Hi, I Am<br/> Dhaneswar Jena
        </motion.h1>
            <Typewriter 
            options={{
              strings:["A Developer", "A Designer", "A Creator"],
              autoStart:true,
              loop:true,
              cursor:'',
              wrapperClassName:'typewriterpara'
            }}
             />
              <div>
            <a href="mailto:dhaneswarjena18@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
            +<motion.span whileInView={counter100} ref={span100}>{100}</motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
               +<motion.span whileInView={counter500} ref={span500}>500</motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>dhaneswarjena18@gmail.com</span>
            </article>
          </aside>
        </div>
     </section>
     <section>
        <img src={me} alt="Dhaneswar" />
      </section>
      <BsChevronDown />
    </div>
  )
}

export default Home