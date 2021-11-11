import NavBar from './Elements/NavBar/NavBar';
import Welcome from './Elements/Welcome/Welcome';
import About from './Elements/About/About';
import Projects from './Elements/Projects/Projects';
import Games from './Elements/Games/Games';
import Footer from './Elements/Footer/Footer';
import Arrow from './Elements/UpArrow/UpArrow';
import './App.css'

const App = () => {
  return (
    <div className = 'app'>
      <NavBar/>
      <Welcome/>
      <About/>
      <Projects/>
      <Games/>
      <Footer/>
      <Arrow/>
    </div>
  )
}

export default App;