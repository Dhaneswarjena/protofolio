import React from 'react'
import data from '../Assets/db.json'
const Timeline = () => {
  return (
    <div id="experience">
        <div className='timelinebox'>
           {
            data.projects.map((i,index)=>(
                <TimelineItems title={i.title} text={i.date} key={i.title} index={index}/>
            ))
           }
        </div>
    </div>
  )
}
const TimelineItems=({title,text,index})=>{
   return <div className={`timelineitem ${index%2===0?'lefttimeline':'righttimeline'}`}>
          <div>
          <h2>{title}</h2>
           <p>{text}</p>
          </div>
   </div>
}
export default Timeline