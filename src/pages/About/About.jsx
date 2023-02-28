import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "About the app and creator" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookPilot</h2>
            <p className='fs-17'>At BookPilot, we are passionate about making it easy for book lovers to find their next favorite read. Our team of avid readers and book enthusiasts understands the joy and satisfaction that comes from discovering a great book, and we want to help others experience that same feeling.
<p>Our book search app is the result of months of hard work and dedication from our team. We have designed our app to be easy to use and intuitive, with a powerful search engine and advanced filters that allow users to quickly find the books they're looking for.</p>
<p>
We believe that books have the power to inspire, educate, and transform lives. That's why we're committed to making it easy for anyone to discover new books and fall in love with reading. Join us on this journey, and let's explore the world of books together.</p>
</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About