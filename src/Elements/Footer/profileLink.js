export const ProfileLink = ({link, icon, site}) => {
 return(
   <a href={link} className="profile-link" target="_blank" rel="noreferrer"><i className={icon}></i> {site}</a>
 );
}