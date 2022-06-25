import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { FaBars, FaRegTimesCircle } from 'react-icons/fa';
import { Link } from 'react-scroll'

export const Navbar = () => {

  const [activateMenu, setactivateMenu] = useState(false);
  const [activeClass, setactiveClass] = useState(false);
  const [principalUbication, setPrincipalUbication] = useState(window.scrollY);


  const openMenu = () => {
    setactivateMenu(!activateMenu)
  }

  const handleViewNav = () => {

      let currentDisplacement = window.scrollY;

      if(currentDisplacement >= 1 ){
        setactiveClass(true)
      }else{
        setactiveClass(false)
      }

      if (principalUbication >= currentDisplacement) {
          document.getElementById('navbar').style.top = '0';
          document.getElementById('navbar').style.transition = '.5s'
          
      } else {
          document.getElementById('navbar').style.top = '-400px';
          document.getElementById('navbar').style.transition = '1s'
      }

      setPrincipalUbication(currentDisplacement);

  }

  useEffect(() => {
      window.addEventListener('scroll', handleViewNav);
    return () => {
      window.removeEventListener('scroll', handleViewNav);
    };
  }, [window.scrollY]);


  return (
    <nav className={activeClass ? 'navbar active' : 'navbar'} id='navbar'> 
    

      <img className='logo' id='logo' src='https://res.cloudinary.com/adivinity/image/upload/v1650293646/logoAndresBonillaActive_1_acjiwn.png' alt='logo'/>

      <div className='links' id='links'>
         <Link to="about-anchor" spy={true} smooth={true} offset={50} duration={500}>About</Link>
         <Link to="projects-anchor" spy={true} smooth={true} offset={50} duration={500}>Work</Link>
         <Link to="contact-anchor" spy={true} smooth={true} offset={50} duration={500}>Contact</Link> 
      </div>

      <div className='bar-icon' id='bar-icon'>
         <FaBars onClick={openMenu} />
      </div>

      {
        activateMenu && <div className='black-background'>

                          <div className='times-icon'>
                              <FaRegTimesCircle onClick={openMenu} />
                          </div>

                          <div className='menu animate__animated animate__fadeInRight'>
                            <Link to="about-anchor" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                            <Link to="projects-anchor" spy={true} smooth={true} offset={50} duration={500}>Work</Link>
                            <Link to="contact-anchor" spy={true} smooth={true} offset={50} duration={500}>Contact</Link> 
                          </div>

                        </div>
      }

    </nav>
  )
}
