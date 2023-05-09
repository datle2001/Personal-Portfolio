export const ProjectLink = ({link}) => {
 return (
   <div className='center-link'>
     <div className="box-link">
       <a href={link} target="_blank" rel="noreferrer noopener" >Repository <i className="bi bi-arrow-up-right"></i></a>
     </div>
   </div>
 )
}