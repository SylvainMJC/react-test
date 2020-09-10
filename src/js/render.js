import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { render } from 'react-dom';

//IMPORT COMPONENTS
import PokemonList from './PokemonList';
import App from './App';
import TodoList from "./TodoList";

//IMPORT STYLES
import '../scss/style.scss';


render(
    <App />, 
    document.getElementById('root')
  )
  
  
render(
    <PokemonList />, 
    document.getElementById('pokemons')
  )


ReactDOM.render(
  <div>
    <TodoList/>
  </div>,
  document.querySelector("#ToDoList")
);
