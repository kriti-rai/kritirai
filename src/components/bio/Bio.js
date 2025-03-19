import React from 'react';
import { Link } from 'react-router-dom';
import HeaderName from '.././HeaderName';

const Bio = () => {
  return (
    <div className='bio'>
      <div className='header-name-light'><HeaderName /></div>
      <div className='bio-left-col'>
        <div className='bio-header'>Bio.</div>
      </div>
      <div className='bio-right-col'>
        <div className='bio-content'>
          <p>
            Kriti is originally from Nepal and currently resides in Oakland, California.
          </p>
          <p>
            She is a Full Stack Developer with a background in JavaScript (React, Redux, etc.), Ruby, Ruby on Rails, CSS/HTML, REST APIs, SQL, GitHub, MVC, responsive web design, object-oriented programming practices, with overall ability to plan and architect projects. She is passionate about developing high-quality products that impact the society in a meaningful way.
          </p>
          <p>
            Kriti was not always a programmer but in late 2018 she decided to teach herself how to code and enrolled in a Web Development bootcamp at  <a href="https://flatironschool.com/" target="blank">Flatiron School</a>. During the program she single-handedly built multiple web applications covering the key concepts and frameworks of web development.
          </p>
          <p>
            Currently, she works as a Software Quality Engineer at a medical-device company and is responsible for assessing and validating computerized systems. Although the role does not entail too much programming, she is constantly working on her personal side projects which also includes an <a href="https://github.com/ChiExplores/a-stardust-truce-react" target="blank" styling={{textDecoration:"none"}}>open-source project</a>.
            She also enjoys writing about programming-related topics and therefore maintains an active <a href="https://kriti-rai.github.io" target="blank">blog</a>.
          </p>
          <p>
            In her spare time, Kriti is either attempting to beat her last PR at the gym or to strike a new yoga asana. She enjoys hiking but prefers backpacking more. She also loves tending to her plant babies and does this weird thing of talking to them sometimes.
            One of her many passions is taking photographs and she maintains an unofficial photography portfolio <a href="https://vsco.co/kriti-rai/gallery" target="blank">here</a>.
          </p>
          <p>
            Feel free to reach out at <a a href="mailto:kriti.rai@gmail.com">kriti.rai@gmail.com</a> if you'd like to connect.
          </p>
        </div>
        <div className="bio-footer-container">
          <Link to='/kritirai'><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Home</Link>
          <Link to='/portfolio'>Portfolio&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  )
};

export default Bio;
