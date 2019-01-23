/*
*
*Use Babel to complile
*
*/


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time1: 0,
      time2: 0
    }
  }
  
   finish1(data){
    this.setState({
      time1: data
    })
   }
    
   finish2(data) {
    this.setState({
     time2: data
    })
   }
   
  render() {
    return (
      <div>
        <div className = 'flex justify-center'>
          <Time1 time = {this.state.time1} />
          <Time2 time = {this.state.time2} />
        </div>
        <div>
          <Runner1 finish={this.finish1.bind(this)}/>
          <Runner2 finish={this.finish2.bind(this)}/>
        </div>
      </div>
    )
  }
}



class Time1 extends React.Component {
  constructor(){
    super();
  }
  
  render(){
    return(
      <p>🐰Use {this.props.time} seconds</p>
    )
  }
}

class Time2 extends React.Component {
  constructor(){
    super();
  }
  
  render(){
    return(
      <p>🐢Use {this.props.time} seconds</p>
    )
  }
}



class Runner1 extends React.Component {
  constructor() {
    super();
    
    let n = 0;

    let id;
    this.state = {
      style: {
        transform: `translate(${n}%)`
      }
    }
    
    let start = new Date();
    
    id = setInterval(()=> {
      n +=25;
      this.setState({
        style: {
          transform: `translate(${n}%)`
        }
      })
      
      if(n >=100) {
        clearInterval(id)
        let time = new Date() - start;
        this.props.finish(time)
      }
    }, 1000)
   
  };
  
  render(){
    return (
      <div className = 'track'>
        <h1 className='runner' style={this.state.style}>🐰</h1>
        
      </div>
    )
  }
}

class Runner2 extends React.Component {
  constructor() {
    super();
    
    let n = 0;

    let id;
    this.state = {
      style: {
        transform: `translate(${n}%)`
      }
    }
    
    let start = new Date();
    
    id = setInterval(()=> {
      n +=20;
      this.setState({
        style: {
          transform: `translate(${n}%)`
        }
      })
      
    if(n >=100) {
      clearInterval(id)
      let time = new Date() - start;
      this.props.finish(time)
    }
    }, 1000)
    
  };
  
  render(){
    return (
      <div className = 'track'>
        <h1 className='runner' style={this.state.style}>🐢</h1>
        
      </div>
    )
  }
}


ReactDOM.render(
  <App />, document.querySelector('#app')
)