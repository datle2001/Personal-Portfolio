import React, {useEffect} from 'react';
import { Project } from './project';
import './projects.css'

const MY_GITHUB = 'https://github.com/datle2001/'
const ProjectList = [
  {
    id: 0,
    title: 'Contact Tracing App',
    text : 'This program allows users to manually record, modify, and remove their contacts and where they have been on a daily basis. As a result, users can report who and where they were exposed to when they show symptoms of Covid-19.\nThis program also enables a control center to quickly search:\n*who were at a given location and time\n*a given person\'s contacts and secondary contacts\n*who were the most contacted person given a list of people.\nThese three features allows early and accurate detection of the spreading of Covid-19.',
    link : MY_GITHUB + 'Contact-Tracing',
  },
  {
    id: 1,
    title: 'Who wants to be a millionaire',
    text : 'This project is a game which imitates the famous gameshow "Who wants to be a millionaire?", developed as a final project for the Object-Oriented Programming class. It, therefore, uses the concepts of OOP, Java Swing for GUI, and Model-Viewer-Controller pattern. Excited??!!\nPlayers can customize difficulty level (easy, medium, hard) and experience with a whole lot of fun-loving but also serious questions ranging from common knowledge to more academic fields.\nDo you have what it takes to become the next millionaire?\n--> Visit my repo --> download the files --> enjoy the ride on your favorite IDE!!!', 
    link : MY_GITHUB + 'Who-wants-to-be-millionaires',
  }
]

export const Projects = () =>{
  useEffect(() => {
    projNavigate()
  }, [])

  const projNavigate = () => {
    var projects = document.querySelectorAll(".project-tile");
    var currentPage = 0;
    projects[0].classList.add("moveToMiddle") 
    let next = document.querySelector("#next");
    next.addEventListener("click", nextProject);
    function nextProject() {
      if (currentPage < projects.length - 1) {
        projects[currentPage].classList.remove("moveToMiddle");
        projects[currentPage].classList.add("moveToLeft");
        currentPage++;
        projects[currentPage].classList.add("moveToMiddle");
      }
    }

    let back = document.querySelector("#back");
    back.addEventListener("click", backProject);
    function backProject() {
      if (currentPage > 0) {
        projects[currentPage].classList.remove("moveToMiddle");
        projects[currentPage].classList.add("moveToRight")
        currentPage--;
        projects[currentPage].classList.add("moveToMiddle");
      }
    };
  }
  return (
    <div id="projects" className="section">
      <h2>My Projects</h2>
      <div id="right"><div className='scale'><i className="bi bi-chevron-compact-right" id="next"></i></div></div>
      <div id="left"><div className='scale'><i className="bi bi-chevron-compact-left" id="back"></i></div></div>
      <div id="project-tiles">
        {ProjectList.map(item => <Project id={"proj" + item.id} title={item.title} text={item.text} link={item.link}/>)}
      </div>
    </div>
  )
}