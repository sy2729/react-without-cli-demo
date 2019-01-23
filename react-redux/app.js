/*
*
* Use babel to compile
*
*/



// use redux

function reducer(state, action) {
  
  var state = state || 100000

  switch (action.type) {
    case 'use':
      return state - action.payload
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = Redux.createStore(reducer)




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
  store.dispatch({type: 'use', payload: 1000})
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
    <App money = {store.getState()}/>,
    document.querySelector('#app')
  )
}


render()
store.subscribe(() => render())
