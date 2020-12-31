import React from 'react';

function Test(props){

   return <div>welcome {props.name +' '+props.lastname} from Test 
   <p>{props.children}</p>
   </div>
}
export default Test;