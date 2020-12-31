import React, {Component } from 'react';

import Test from './components/test';
import Hello from './components/hello';
import Lists from './components/lists';
import Conditions from './components/Conditions';
import lifecycleExample from './components/lifecycleExample';


function Task(props){
  const todo=props.todo;
  const index=props.index;
  const completeTask=props.completeTask;

  return(
    <li>
      {todo.text} 
      <button onClick={()=>{completeTask(index)}}>Done</button>
      </li>);

}

class HomeScreen extends Component {
state = {
  newTask :"",
  todos:[
    {text:'react js'},
    {text:'react node js '},
    {text:'react node js '},
    {text:'react node js '},
    {text:'react node js '}
  ],
  value:'default'
}

completeTask = (index)=>{
 const todos=[...this.state.todos];
 todos.splice(index,1);
 this.setState({
   todos
 });

}

updateNewTask=(event)=>{
  this.setState({
    newTask: event.target.value
  });
}
setValue =(event)=>{
  this.setState({
    value: event.target.value
  })
}
addTask=()=>{
  const todos=[...this.state.todos];
  todos.push({
    text:this.state.newTask
  });
  this.setState({
    todos
  });
}

  render(){
    
    return (
      <div>welcome 
      {/* <Test name="islam" lastname="darmousa">description </Test>
      <Hello name="islam"/>
      <Lists />
      <Conditions /> 
       the time is < lifecycleExample/> */}
       <hr/>
       {this.state.todos.map( (todo,index) => <Task todo={todo} completeTask={this.completeTask} index={index} key={index}/>)}
       <input value={this.state.newTask} onChange={this.updateNewTask}/>
       <button onClick={this.addTask}>add task </button>
       <hr/>
       <input value={this.state.value} onChange={this.setValue}/>
       <input value={this.state.value}/>
      </div>
    );
  }
}

export default HomeScreen;