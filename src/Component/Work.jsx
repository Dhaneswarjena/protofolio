import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from '../Assets/db.json'
const Work = () => {
  return (
    <div id="work">
        <h2>Work</h2>
        <section>
            <article>
                <Carousel autoPlay={true} showStatus={false} showIndicators={false} showThumbs={false} showArrows={false} infiniteLoop={true} interval={2000}>
                  {
                    data.projects.map(i=>(
                        <div key={i.title} className='workItem'>
                        <img src={i.imgSrc} alt={i.title} />
                        <aside>
                        <h2>{i.title}</h2>
                          <p>{i.description}</p>
                          <a href={i.url} target='blank'>View Demo</a>
                        </aside>
                        </div>
                    ))
                  }
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work