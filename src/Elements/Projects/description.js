export const Description = ({text}) => {
 const newText = text.split('\n').map(str => {
   if(str[0] ==='*') {
     return <li>{str.substring(1)}</li>
   }
   else {
     return <p>{str}</p>
   }
 });
 
 return newText;
}