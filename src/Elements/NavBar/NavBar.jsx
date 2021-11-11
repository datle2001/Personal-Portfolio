import './NavBar.css'

const NavLink = (props) => {
  return (
    <a href={props.link} className="nav-link" id={props.id}>{props.name}</a>
  )
}

const NavBar = () => {
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



export default NavBar;