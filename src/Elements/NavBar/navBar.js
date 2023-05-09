import React, { useEffect } from 'react';
import './navBar.css'
import { NavLink } from './navLink';

export const NavBar = () => {
  useEffect(() => {
    navBarScrollUp();
    smoothNavigate();
  }, [])

  const navBarScrollUp = () => {
    let wsec = document.getElementById("wSec");
    let navbar = document.getElementById("navbar");

    window.onscroll = () => {
      if (window.pageYOffset > wsec.offsetHeight - navbar.offsetHeight / 2) {
        navbar.style.transition = "0.5s";
        navbar.style.top = "-150px";
      } else {
        navbar.style.transition = "0s";
        navbar.style.top = "0";
      }
    };
  }
  const smoothNavigate = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (e) => {
        e.preventDefault();
        const selector = navLink.getAttribute('href')

        document.querySelector(selector).scrollIntoView({
          behavior: "smooth"
        });
      });
    })
  }

  return(
    <nav id="navbar">
      <div id="logo">D</div>
      <div id="rightBar">
        <NavLink link="#wSec" id="home-nav" name="Home"/>
        <NavLink link="#about" id="about-nav" name="About"/>
        <NavLink link="#projects" id="projects-nav" name="Projects"/>
        <NavLink link="#games" id="games-nav" name="Games"/>
        <NavLink link="#contact" id="contact-nav" name="Contact"/>
      </div>
    </nav>
  )
}