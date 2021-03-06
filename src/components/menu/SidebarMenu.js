import React from 'react';
import { Link } from 'react-router-dom';


const SidebarMenu = () => {
  return (
    <ul className='sidebar-menu'>
      <li><Link to ='/bio'><span className="sidebar-menu-item"><i className="fas fa-id-card"></i><span className='menu-label'>Bio</span></span></Link></li>
      <li><Link to ='/portfolio'><span className="sidebar-menu-item"><i className="fas fa-briefcase"></i><span className='menu-label'>Portfolio</span></span></Link></li>
      <li><a target='_blank' href='https://github.com/kriti-rai/' className="sidebar-menu-item"><i className="fab fa-github"></i><span className='menu-label'>GitHub</span></a></li>
      <li><a target='_blank' href='https://www.linkedin.com/in/kriti-rai/' className="sidebar-menu-item"><i className="fab fa-linkedin-in"></i><span className='menu-label'>Linkedin</span></a></li>
      <li><a href="mailto:kriti.rai@gmail.com"><span className="sidebar-menu-item"><i className="fas fa-envelope"></i><span className='menu-label'>Contact</span></span></a></li>
      <li><Link to ='/life'><span className="sidebar-menu-item"><i className="fas fa-clock"></i><span className='menu-label'>Life</span></span></Link></li>
    </ul>
  )
};

export default SidebarMenu;
