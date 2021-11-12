import React from 'react';
import './NavBar.css'

const NavLink = (props) => {
  return (
    <a href={props.link} className="nav-link" id={props.id}>{props.name}</a>
  )
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
    this.smoothNavigate = this.smoothNavigate.bind(this);
  }
  componentDidMount() {
    this.scrollUp();
    this.smoothNavigate();
  }
  scrollUp() {
    let wsec = document.getElementById("wSec");
    let navbar = document.getElementById("navbar");
    //navbar scrolls up
    window.onscroll = function () {
      if (window.pageYOffset > wsec.offsetHeight - navbar.offsetHeight / 2) {
        navbar.style.transition = "0.5s";
        navbar.style.top = "-150px";
      } else {
        navbar.style.transition = "0s";
        navbar.style.top = "0";
      }
    };
  }
  smoothNavigate() {
    let linkArray = document.querySelectorAll('a[href^="#"]');
    linkArray.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    })
  }
  render() {
    return(
      <nav id="navbar">
        <div id="logo">D</div>
        <div id="right">
          <NavLink link="#wSec" id="home-nav" name="Home"/>
          <NavLink link="#about" id="about-nav" name="About"/>
          <NavLink link="#projects" id="projects-nav" name="Projects"/>
          <NavLink link="#games" id="games-nav" name="Games"/>
          <NavLink link="#contact" id="contact-nav" name="Contact"/>
        </div>
      </nav>
    )
  }
}



export default NavBar;