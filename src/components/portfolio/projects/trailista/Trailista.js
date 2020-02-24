import React from 'react';

const Trailista = () => {
  return (
    <div className='project-card'>
      <div className='overlay'></div>
      <div className='project-links-hover'>
        <p className='fade-in'><a target='_blank' href='https://github.com/kriti-rai/trailista' className="project-repo">GitHub</a></p>
        <p className='fade-in'><a target='_blank' href='http://trailista.herokuapp.com/' className="project-demo">Demo</a></p>
      </div>
      <img className='project-card-img' src={require("./images/cover.jpg")} alt-text="Trailista cover image"></img>
    </div>
  )
}

export default Trailista;
