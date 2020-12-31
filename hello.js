import React ,{Component} from 'react';


class Hello extends Component {

  constructor(props){
     super(props);
     this.increase=this.increase.bind(this);
  }
    state={
        age:15,
        user :{
            name:"islam",
            last:"darmousa"
        },
        socialLinks:[
            "facebook",
            "messenger"
        ]
    }

    decrement =()=>{
      this.setState({age : this.state.age-1 });
    }
    increase =()=>{
      this.setState({age : this.state.age+ 1 });
    }
    increase(){
      this.setState({age : this.state.age+ 1 });
    }
    updateName(event){
      const newName = event.target.value;

      this.setState({
        ... this.state.user,
        user : newName
        
      });
    }
    render(){
      return (
        <div>welcome {this.props.name} from hello class  
        <p>{this.state.user.name} {this.state.user.last} age = {this.state.age}</p>
        <p>{this.state.socialLinks}</p>
        <button onClick={this.increase}>increase</button>
        <button onClick={this.decrement}>decrease </button>
        <button onClick={this.increase}>increase</button>
        <input type="text" onChange={this.updateName.bind(this)}/>
        </div>
      );
    }
  }
export default Hello;