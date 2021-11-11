import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App/>, document.getElementById('root'));

let wsec = document.getElementById("wSec");
let navbar = document.getElementById("navbar");
//let about = document.querySelector("#about");

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

let linkArray = document.querySelectorAll('a[href^="#"]');
linkArray.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
});
});

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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
