import React, { useEffect } from 'react'
import { Navbar } from '../../components/navbar/Navbar.js'
import { ProjectView } from '../../components/project-view/ProjectView.js';
import './HomePage.css';
import { DiReact, DiJavascript1, DiAngularSimple, DiNodejsSmall, DiMysql, DiMongodb, DiHtml5, DiCss3 } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { fansiveDescription, fileBoxDescription, geekipediaDescription, thePokedexDescription } from '../../helpers/texts.js';
import { fansiveTechnologiesStack, fileBoxTechnologiesStack, geekepediaTechnologiesStack, thePokedexTechnologiesStack } from '../../helpers/stackTechnologies.js';
import { ContactForm } from '../../components/contact-form/ContactForm.js';

export const HomePage = () => {

        const hideStars = () => {
                
                if (window.scrollY >= document.documentElement.scrollHeight * 0.35 + 100) {

                        // sin estrellas
                        document.getElementById('stars').style.display = 'none';
                                         

                }else {

                        // con estrellas
                        document.getElementById('stars').style.display = 'flex';
                        
                }


        }
        

        useEffect(() => {
                window.addEventListener('scroll', hideStars);
              return () => {
                window.removeEventListener('scroll', hideStars);
              };
            }, [window.scrollY]);



  return (
        <>

                <div id='stars'>
                        
                </div>
        
                <div className='container'>

                        <Navbar />

                
                        <div className='presentation' id='presentation-mobile'>
                                <div>
                                <h1>Andres Bonilla</h1>
                                <h4>Software Developer</h4> 
                                </div>


                                <div className='video-capsula animate__animated animate__lightSpeedInRight' id='video-capsula'>

                                        <video autoPlay muted playsInline loop>
                                           <source src="https://res.cloudinary.com/adivinity/video/upload/v1650163808/DiseA%CC%83_o_sin_tA%CC%83-tulo_1_-_Compressed_with_FlexClip_zzyfnn.mp4" type="video/mp4"></source>
                                        </video>

                                </div>
                        </div>

                        <div id='about-anchor'></div>

                        {/* about part */}
                        <div className='section-about animate__animated animate__bounceIn animate__delay-1s' id='section-about'>
                                <h3>About</h3>
                                <p>Hi, my name is Andres Bonilla and I am a full stack software developer. I have worked on several personal projects, I founded my own company at 16 years old called fansive. I've been developing apps since I was 14 years old,
                                since I've always liked everything related to science and technology and I've learned it all by myself.</p>
                        </div>


                        {/* skills part */}
                        <div className='section animate__animated animate__bounceIn animate__delay-1s'>
                                <h3>Skills</h3>
                                <div className='technologies-section' id='technologies-section'>
                                        <div className='single-technology' id='single-technology'>
                                                <DiHtml5 className='technology-icon' id='technology-icon' />
                                                <p>HTML5</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiCss3 className='technology-icon' id='technology-icon' />
                                                <p>CSS3</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiJavascript1 className='technology-icon' id='technology-icon' />
                                                <p>JavaScript</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiReact className='technology-icon' id='technology-icon' />
                                                <p>ReactJs</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiAngularSimple className='technology-icon' id='technology-icon' />
                                                <p>Angular</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiNodejsSmall className='technology-icon' id='technology-icon' />
                                                <p>NodeJs</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiMongodb className='technology-icon' id='technology-icon' />
                                                <p>MongoDB</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiMysql className='technology-icon' id='technology-icon' />
                                                <p>MySQL</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <FaAws className='technology-icon' id='technology-icon' />
                                                <p>AWS</p>
                                        </div>
                                        <div className='single-technology' id='single-technology'>
                                                <DiReact className='technology-icon' id='technology-icon' />
                                                <p>React Native</p>
                                        </div>    
                                </div>
                        </div>

                        <div id='projects-anchor'></div>

                        {/* project part */}
                        <div className='section-projects animate__animated animate__bounceIn animate__delay-1s' id='section-projects'>
                                <h3 id='margin-for-mobile'>Projects</h3>
                                <ProjectView title={'Fansive'} projectLink={'https://fansive.net/#/login'} githubLink={'https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/fansive-code'} description={fansiveDescription} technologiesStack={fansiveTechnologiesStack} img={'https://res.cloudinary.com/adivinity/image/upload/v1650292070/fansive-interface_g3plzy.png'}/>
                                <ProjectView title={'fileBox'} projectLink={'https://a-n-d-r-e-s-b-o-n-i-l-l-a.github.io/frontend-fileBox/register'} githubLink={'https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/backend-fileBox'} description={fileBoxDescription} technologiesStack={fileBoxTechnologiesStack} img={'https://res.cloudinary.com/adivinity/image/upload/v1650292900/filebox-interfaces_eyvn9o.png'}/>
                                <ProjectView title={'Geekepedia'} projectLink={'https://a-n-d-r-e-s-b-o-n-i-l-l-a.github.io/Geekipedia/home/Geekipedia'} githubLink={'https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/Geekipedia'} description={geekipediaDescription} technologiesStack={geekepediaTechnologiesStack} img={'https://res.cloudinary.com/adivinity/image/upload/v1650293328/geekipedia-interface_hamndt.png'}/>
                                <ProjectView title={'thePokedex'} projectLink={'https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex'} githubLink={'https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A/thePokedex'} description={thePokedexDescription} technologiesStack={thePokedexTechnologiesStack} img={'https://res.cloudinary.com/adivinity/image/upload/v1656104648/thepokedex-interface_wpbibm.png'}/>
                        </div>  

                        <div className='section-city' id='section-city'>
                                <div className='sun animate__animated animate__pulse animate__infinite' id='sun'></div>
                                <img src='https://res.cloudinary.com/adivinity/image/upload/v1650254160/1696-removebg-preview_zijsxt.png' alt='city-img'/>
                        </div>

                        <div id='contact-anchor'></div>

                        {/* contact part */}
                        <div className='section-contact margin-page' id='margin-page'>
                                <ContactForm />
                        </div>

                        {/* social media part */}
                        <div className='section-social-media' id='section-social-media'>
                                <a rel="noreferrer" href='https://www.instagram.com/a.n.d.r.e.s_b.o.n.i.l.l.a/' target="_blank"><BsInstagram /></a>
                                <a rel="noreferrer" href='https://twitter.com/AndresB64566284' target="_blank"><BsTwitter /></a>
                                <a rel="noreferrer" href='https://github.com/A-N-D-R-E-S-B-O-N-I-L-L-A' target="_blank"><BsGithub /></a>
                                <a rel="noreferrer" href='https://www.linkedin.com/in/andres-bonilla-685983189/' target="_blank"><BsLinkedin /></a>
                        </div>

                </div>

        
        </>

  )
}
