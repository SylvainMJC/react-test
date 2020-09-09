

import React, { Component } from 'react';



export default class ToDoList extends Component {
    
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }
  
    componentDidMount() {
      axios.get(`localhost/api/tasks`)
        .then(res => {
          const tasks = res.data.results;
          this.setState({ taskss });
        })
    }
  
    render() {
      return(
        <ul>
          { this.state.tasks.map(task => <li>{task.name}</li>)}
        </ul>
      )
      
    }
  }
