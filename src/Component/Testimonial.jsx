import React from 'react'

const Testimonial = () => {
  return (
    <div id="testimonial">
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={'Dhaneswar'} feedback={'You are a very Good Developer'}/>
            <TestimonialCard name={'Dhaneswar1'} feedback={'You are a very Good Developer1'}/>
            <TestimonialCard name={'Dhaneswar2'} feedback={'You are a very Good Developer2'}/>
        </section>
    </div>
  )
}
const TestimonialCard=({name,feedback})=>{
    return <article>
   <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
   <h4>{name}</h4>
   <p>{feedback}</p>
    </article>
}
export default Testimonial