import { Description } from "./description"
import { ProjectLink } from "./projectLink"

export const Project = ({id, title, text, link}) => {
 return (
   <div className="project-tile moveToRight" id={id}>
     <div className="project-name">{title}</div>
     <Description text={text}/>
     <ProjectLink link={link}/>
   </div>
 )
}