import React, { useState } from 'react'
import vg from '../Assets/vg.png';
import {motion} from 'framer-motion'
import toast from 'react-hot-toast'
import {addDoc,collection} from 'firebase/firestore'
import { db } from './firebase';
const Contact = () => {
    const[name,setname]=useState()
    const[email,setemail]=useState()
    const[message,setmessage]=useState()
    const[disablebtn,setdisablebtn]=useState(false)
    const submithandler=async(e)=>{
       e.preventDefault();
   try {
    setdisablebtn(true)
    await addDoc(collection(db,'contactmessage'),{
        name,email,message
     })
       toast.success('Message Sent')
       setname('')
       setemail('')
       setmessage('')
       setdisablebtn(false)
   } catch (error) {
    toast.error('Error')
    setdisablebtn(false)
   }
    }
    const animations={
        form:{
            initial:{
                x:'-100%',
                opacity:0
            },
            whileInView:{
                x:0,
                opacity:1
            },
        },
        button:{
            initial:{
                y:'-100%',
                opacity:0
            },
            whileInView:{
                y:0,
                opacity:1
            },
            transition:{
                delay:0.5
            }
        }
    }
  return (
    <div id="contact">
        <section>
            <motion.form onSubmit={submithandler} {...animations.form}>
              <h2>Contact Me</h2>
              <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setname(e.target.value)} required/>
              <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setemail(e.target.value)} required/>
              <input type="text" placeholder='Your Message' value={message} onChange={(e)=>setmessage(e.target.value)} required/>
              <motion.button className={disablebtn?'disablebtn':''} disabled={disablebtn} type='submit' {...animations.button}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="graphics" />
        </aside>
    </div>
  )
}

export default Contact