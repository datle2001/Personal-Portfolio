import {NavBar} from './elements/navBar/navBar';
import {Welcome} from './elements/welcome/welcome';
import {About} from './elements/about/about';
import {Projects} from './elements/projects/projects';
import {Games} from './elements/games/games';
import {Footer} from './elements/footer/footer';
import {Arrow} from './elements/upArrow/upArrow';
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