import React from 'react';



function Lists(props){
    const fruits =["apple","banana","managa"];

   return <div>
       <ul>
           {fruits.map(item => <li>{item}</li>)}
       </ul>

   </div>
}
export default Lists;