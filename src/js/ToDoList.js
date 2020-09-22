import React, { Component } from "react";
import TodoItems from "./TodoItems";
import axios from 'axios';
import "../scss/TodoList.scss";


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost/api-test/api/task/read.php`)
            .then(res => {
                console.log(res)
                const items = res.data.records;
                this.setState({ items });
            }, (error) => {
                console.log(error);
              });
            
      }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });

        let url ='http://localhost/api-test/api/task/delete.php?key=';
        url = url.concat(key);
        axios.get(url, { key : key } )
            .then((response) => {
                console.log(response);
            });
       
      }
           
    addItem(e) {
         if (this._inputElement.value !== "") {
            var uniqid = require('uniqid');
            var newItem = {
              name: this._inputElement.value,
              key: uniqid()
            };
            console.log(newItem.key);
          axios.post('http://localhost/api-test/api/task/create.php', {
                name: newItem.name,
                key: newItem.key,
              })
           
              .then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });

            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
    }


  render() {
    console.log(this.state.items);
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input  ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems  entries={this.state.items}
                    delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;