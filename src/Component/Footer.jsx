import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src="https://avatars.githubusercontent.com/u/46029416?v=4" alt="Founder" />
            <h2>Dhaneswar Jena</h2>
            <p>Motivation is temporary, but discipline last forever.</p>
        </div>
        <aside>
          <h2>Social Media</h2>
          <article>
            <a href="http://youtube.com" target='blank'><AiFillYoutube/></a>
            <a href="http://instagram.com" target='blank'><AiFillInstagram/></a>
            <a href="http://linkedin.com" target='blank'><AiFillLinkedin/></a>
            <a href="http://github.com" target='blank'><AiFillGithub/></a>
          </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp />
        </a>
    </footer>
  )
}

export default Footer