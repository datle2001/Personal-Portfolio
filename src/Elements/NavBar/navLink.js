export const NavLink = ({link, id, name}) => {
 return (
   <a href={link} className="nav-link" id={id}>{name}</a>
 )
}