let createStore = Redux.createStore;

function counter(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + action.payload
    case 'delete':
      return state - action.payload
    case 'addSing':
      var result = state % 2 === 0 ? state : state + 1
      return result
    default:
      return state
  }
}
let store = createStore(counter)




function render(store) {

  let html = `
  <div>
    The num is <span id='num'>${store.getState()}</span> now
    <div>
      <button onclick='add()'>Add</button>
      <button onclick='deleteNum()'>Delete</button>
      <button onclick='addSing()'>Add on Single</button>
      <button onclick='addAfter2S()'>Delete After 2 Second</button>
    </div>
  </div>
`
    app.innerHTML = html
}


function add() {
  store.dispatch({type: 'add', payload: 1})
}

function deleteNum() {
  store.dispatch({type: 'delete', payload: 1})
}

function addSing() {
  store.dispatch({type: 'addSing', payload: 1})
}

function addAfter2S() {
  let id = setTimeout(()=> {
    store.dispatch({type: 'add', payload: 1})
    window.clearTimeout(id)
  }, 2000)
}

render(store)
store.subscribe(() => render(store))