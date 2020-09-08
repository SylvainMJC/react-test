import React, { Component } from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import World from './World'

export default class App extends Component {
  constructor() {
    super();

    // Etat
    this.state = {
      messageHello: "Hello",
      mountedHello: 0,
      messageWorld: "World",
      mountedWorld: 0,
      pageLoaded: false
    }
  }

  // Comportement
  handleHello () {
    this.setState({messageHello: "Bonjour"})
  }

  handleMountedHello () {
    let prev = this.state.mountedHello;

    this.setState({mountedHello: prev + 1})
  }

  handleWorld () {
    this.setState({messageWorld: "le monde"})
  }

  handleMountedWorld () {
    let prev = this.state.mountedWorld;

    this.setState({mountedWorld: prev + 1})  
  }

  // Rendu
  render () {
    let {messageHello, messageWorld, mountedHello, mountedWorld} = this.state;

    return (
      <div>
        <Hello 
          message={messageHello} 
          mounted={mountedHello}
          handleMountedHello={this.handleMountedHello.bind(this)}  
        />
        <World 
          message={messageWorld} 
          mounted={mountedWorld} 
          handleMountedWorld={this.handleMountedWorld.bind(this)}   
        />
        <button onClick={this.handleHello.bind(this)}>Changer le message Hello</button>
      </div>
    )
  }
}

render(
  <App />, 
  document.getElementById('root')
)

