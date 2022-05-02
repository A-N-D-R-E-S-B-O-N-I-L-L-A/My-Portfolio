import React from 'react'
import './ProjectView.css'
import { BsGithub } from 'react-icons/bs';

export const ProjectView = ({title, projectLink, githubLink, description, technologiesStack, img}) => {

  return (
    <>
 
        <div className='project' id='project'>

            <div className='img-part' id='img-part'>

                <img src={img} alt='img-project' />

            </div>

            <div className='description-part' id='description-part'>

                <div>
                    <h4>{title}</h4>

                    <p>{description}</p>

                    <ul className='technologies-part'>
                        {
                            technologiesStack?.map(tech => (
                                <li className='technology' key={tech.id}>
                                    {tech.iconName}
                                    <p>{tech.name}</p>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>


                <div className='links-part'>
                    <a className='link-view-project' href={projectLink} target="_blank" rel="noreferrer">View Project</a>
                    <a href={githubLink} target="_blank" rel="noreferrer"><BsGithub className='github-icon' /></a>
                </div>
            
            </div>


        </div>

    </>
  )
}
