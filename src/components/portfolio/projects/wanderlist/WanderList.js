import React from 'react';

const WanderList = () => {
  return (
    <div className='project-card'>
      <div className='overlay'></div>
      <div className='project-links-hover'>
        <p><a target='_blank' href='https://github.com/kriti-rai/wander-list' className="project-repo">GitHub</a></p>
        <p><a target='_blank' href='https://www.youtube.com/watch?v=VMWHzbSXqKQ' className="project-demo">Demo</a></p>
      </div>
      <div className='phone-project-content'>
        <div className='phone-project-title'>WanderList</div>
        <div className='project-links'>
          <a target='_blank' href='https://github.com/kriti-rai/wander-list' className="project-repo">GitHub</a> | <a target='_blank' href='https://www.youtube.com/watch?v=VMWHzbSXqKQ' className="project-demo">Demo</a>
        </div>
      </div>
      <img className='project-card-img' src={require("./images/home.png")} alt-text='Wander List Cover image'></img>
    </div>
  )
}

export default WanderList;
