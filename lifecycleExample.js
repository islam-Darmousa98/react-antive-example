import React ,{Component} from 'react';


class lifecycleExample extends Component {

  constructor(props){
     super(props);
   
  }
    componentDidMount(){
      setInterval(() => {
        this.setState({ 
          time: new Date
        });
      }, 100);
    }
    render(){
      return (
        <div> 
        this is time {this.state.time.toLocaleTimeString()}
        </div>
      );
    }
  }
export default lifecycleExample;