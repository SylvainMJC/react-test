import React, { Component } from 'react'

class Hello extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps){
    return this.props.message != nextProps.message;
  }

  componentDidUpdate() {
    console.log(this.props.mounted + 1)
  }

  render() {
    let {message} = this.props;

  return <h1>{message}</h1>
  }
}

export default Hello;