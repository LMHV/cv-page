import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {

  const data = [{
    'project_img': 'project-chatbot.jpg',
    'github-link': '',

  },
  {
    'project_img': 'project-airbnb.jpg',
    'github-link': '',

  },
  {
    'project_img': 'project-MERN.jpg',
    'github-link': '',

  }];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(data[0].project_img);


  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : data.length - 1;
    setSelectedImg(data[nextIndex].project_img)
    setSelectedIndex(nextIndex)
  }

  const next = () => {
    const condition = selectedIndex < data.lenght - 1; // TRUE si indice < 2 / FALSE si indice 2
    const nextIndex = condition ? selectedIndex + 1 : 0; // si TRUE indice + 1 / si FALSE indice 0
    setSelectedImg(data[nextIndex].project_img)
    setSelectedIndex(nextIndex)
  }

  return (
    <div className='projects-container'>
      <img className='project-img' alt='carouselImg' src={require(`../images/${selectedImg}`)}></img>
      
      <button id='left-button' className='button-car' onClick={previous}>previous</button>
      <button id='right-button' className='button-car' onClick={next}>next</button>
    </div>
  )
}

export default Projects