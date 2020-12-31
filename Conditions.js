import React, { Component } from 'react';

function AgeComponent(props){
   let ageTemplate='';
   if(props.age>10){
      ageTemplate='you are more than 10';
   }else {
      ageTemplate='you arenot more than 10';
   }
   return ageTemplate;

}


class Conditions extends Component{
   render(){
      const age=9;
     
      let users=[
         {id :1,name:"islam",age:20},
         {id :2,name:"soso",age:30},
         {id :3,name:"sawsan",age:40}
      ];
     
      return(
         <div>
            <AgeComponent age={age}/>
            <ul>
                 {users.map( (user ,index) => <li>{index} {user.name}</li>)}
            </ul>
            
            
         </div>
      );
   }

}

  

export default Conditions;