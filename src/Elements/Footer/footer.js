import './footer.css'
import { ProfileLink } from './profileLink';

export const Footer= () => {
  return (
    <footer id="contact" >
      <div className="prof-links">
        <ProfileLink link='https://github.com/datle2001' icon='bi bi-github' site='Github'/>
        <ProfileLink link='https://www.linkedin.com/in/datle2882/' icon='bi bi-linkedin' site='LinkedIn'/>
        <ProfileLink link='https://www.facebook.com/profile.php?id=100008142252354' icon='bi bi-facebook' site='Facebook'/>
      </div>
    </footer>
  )
}