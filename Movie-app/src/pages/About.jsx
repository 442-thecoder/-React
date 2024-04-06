import React from 'react'
import '../App.css'

const About = () => {
  return (
    <div id='about' className=' text-center justify-content-center d-flex  '>
     <img id='aboutlogo'  src="./src/assets/images/442-logo.jpg" alt="" />
     <div id='aboutme'>
     <h3>
                Hi there, welcome to my website! I'm Gowri sankar,
                a passionate Front end  developer who enjoys learning new technologies
                and solving problems with code!
            </h3>
            <p>
                This website is my personal blog where I write about my self and my passion towards work
            </p>
            <p>
                Thank you for visiting my website and getting to know me better. I hope you
                enjoyed reading my blog posts and
                found
                them useful and informative. If you have any feedback or
                suggestions, please let me know. I'd love to hear from you.
            </p>
            <a href="#" className="btn">Read More</a>
     </div>
    </div>
  )
}

export default About
