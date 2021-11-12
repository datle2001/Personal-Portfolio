import { render } from '@testing-library/react';
import react from 'react';
import './Projects.css'

const Description = (props) => {
  const text = props.text;
  const newText = text.split('\n').map(str => {
    if(str[0] ==='*') {
      return <li className="items">{str.substring(1)}</li>
    }
    else {
      return <p>{str}</p>
    }
  });
  return newText;
}
const ProjectLink = (props) => {
  const link = props.link;
  return (
    <div className="link-container">
      <a href={link} target="_blank" rel="noreferrer noopener"><button type="button" className="proj-bttn">Repository <i className="bi bi-arrow-up-right"></i></button></a>
    </div>
  )
}
const ProjectTile = (props) => {
  return (
    <div className="project-tile" id={props.id}>
      <div className="proj-name">{props.title}</div>
      <Description text={props.text}/>
      <ProjectLink link={props.link}/>
    </div>
  )
}
const ProjectList = {
  0: {
    'title': 'Contact Tracing App',
    'text' : 'This program allows users to manually record, modify, and remove their contacts and where they have been on a daily basis. As a result, users can report who and where they were exposed to when they show symptoms of Covid-19.\nThis program also enables a control center to quickly search:\n*who were at a given location and time\n*a given person\'s contacts and secondary contacts\n*who were the most contacted person given a list of people.\nThese three features allows early and accurate detection of the spreading of Covid-19.',
    'link' : 'https://github.com/datle2001/Contact-Tracing',
  },
  1: {
    'title': 'Who wants to be a millionaire',
    'text' : 'This project is a game which imitates the famous gameshow "Who wants to be a millionaire?", developed as a final project for the Object-Oriented Programming class. It, therefore, uses the concepts of OOP, Java Swing for GUI, and Model-Viewer-Controller pattern.', 
    'link' : 'https://github.com/datle2001/Who-wants-to-be-millionaires',
  }
}

class Projects extends react.Component{
  constructor(props) {
    super(props);
    this.projNavigate = this.projNavigate.bind(this);
  }
  componentDidMount() {
    this.projNavigate();
  }
  projNavigate() {
    var projects = document.querySelectorAll(".project-tile");
    var currentPage = 0;
    projects[0].style.display = "block";
    let next = document.querySelector("#next");
    next.addEventListener("click", nextProject);
    function nextProject() {
      if (currentPage < projects.length - 1) {
        projects[currentPage].style.display = "none";
        projects[++currentPage].style.display = "block";
      }
    };

    let back = document.querySelector("#back");
    back.addEventListener("click", backProject);
    function backProject() {
      if (currentPage > 0) {
        projects[currentPage].style.display = "none";
        projects[--currentPage].style.display = "block";
      }
    };
  }
  render() {
    return (
      <div id="projects" className="section">
        <h2>My Projects</h2>
        <div id="next"><i className="bi bi-chevron-compact-right"></i></div>
        <div id="back"><i className="bi bi-chevron-compact-left"></i></div>
    
        <ProjectTile id="proj1" title={ProjectList[0].title} text={ProjectList[0].text} link={ProjectList[0].link}/>
    
        <ProjectTile id="proj2" title={ProjectList[1].title} text={ProjectList[1].text} link={ProjectList[1].link}/>
      </div>
    );
  }
  
}

export default Projects;