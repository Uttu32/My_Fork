import React from 'react'
import Navbar from './Navbar'
import './About.css'


export default function AboutUs(){

  return(
    <div>
      <Navbar/>

      <div className="main">
        <h2>About Us</h2>
        <span>|</span>
      </div>

      <div className="About">
        <div className="imageDescription">
          <img src="https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/07/shiva-1594171271.jpg" />
          <h3>Lord Shiva</h3>
        </div>

        <div>
          <h2> Lord Shiva</h2>
          <p>He is the Supreme Being in Shaivism, one of the major traditions within Hinduism. Shiva is known as "The Destroyer" within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu. In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe.</p>
        </div>
      </div>
    
    </div>
  )
}