/*
*
*Use babel to compile
*
*/


let eventHub = {
  events: [],
  on(name, fn){
    this.events[name] = typeof this.events[name] === 'object' && this.events[name] instanceof Array ? this.events[name].push(fn) : [fn];
  },
  emit(name, data){
    if(this.events[name]) {
        this.events[name].forEach((i)=> {
          i(data)
        })
    }
  }
}


let Manager = {
  money: 100000,
  init(){
    eventHub.on('use', (data)=> {
      this.money -= data;
      render()
    })
  }
  
}

Manager.init()

class App extends React.Component {
  constructor(){
    super()
//     this.state = {
//       money: 10000
//     }
  }
  
  render(){
    return (
       <div className="flex justify-around">
         <Fa1 money={this.props.money}/>
         <Fa2 money={this.props.money}/>
       </div>
    )
  }
}




function Fa1(props){
  return (
    <div>
      <p>大爸</p>
      <p>{props.money}</p>
      
      <Son1 money = {props.money}/>
      <Son2 money = {props.money}/>
      
    </div>
  )
}

function Fa2(props){
  return (
    <div>
      <p>二爸</p>
      <p>{props.money}</p>
      
      <Son3 money = {props.money}/>
      <Son4 money = {props.money}/>
      
    </div>
  )
}


function Son1(props){
  return (
    <div>
      <p>儿1</p>
      <p>{props.money}</p>
    </div>
  )
}


function Son2(props){
  let use = function(){
    eventHub.emit('use', 100)
  }
  return (
    <div>
      <p>儿2</p>
      <p>{props.money}</p>
      <button onClick={use}>Use</button>
    </div>
  )
}

function Son3(props){
  return (
    <div>
      <p>儿3</p>
      <p>{props.money}</p>
    </div>
  )
}


function Son4(props){
  return (
    <div>
      <p>儿4</p>
      <p>{props.money}</p>
    </div>
  )
}

function render(){
  ReactDOM.render(
    <App money = {Manager.money}/>,
    document.querySelector('#app')
  )
}


render()
