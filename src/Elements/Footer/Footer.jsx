import './Footer.css'

const ProfileLink = (props) => {
  return(
    <a href={props.link} className="profile-link" target="_blank" rel="noreferrer"><i className={props.icon}></i> {props.site}</a>
  );
}
const Footer= () => {
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

export default Footer;