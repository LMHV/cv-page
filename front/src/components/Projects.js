import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {

  const data = [{
    'project_img': 'project-chatbot.jpg',
    'github_link': 'https://github.com/LMHV/chatbot-ai',

  },
  {
    'project_img': 'project-airbnb.jpg',
    'github_link': 'https://github.com/LMHV/react-airbnb',

  },
  {
    'project_img': 'project-MERN.jpg',
    'github_link': 'https://github.com/LMHV/MERN-stack-project',

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
    const nextIndex = selectedIndex < data.length - 1 ? selectedIndex + 1 : 0;
    setSelectedImg(data[nextIndex].project_img)
    setSelectedIndex(nextIndex)
  }

  const imgLink = (e) => {
    e.preventDefault();
    window.open(data[selectedIndex].github_link)
  }

  return (
    <div id='projects' className='projects-container'>
      <img title='Click to visit GITHUB page' onClick={imgLink} className='project-img' alt='carouselImg' src={require(`../images/${selectedImg}`)}></img>

      <button id='left-button' className='button-car' onClick={previous}>previous</button>
      <button id='right-button' className='button-car' onClick={next}>next</button>
    </div>
  )
}

export default Projects