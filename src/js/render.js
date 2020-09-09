import React, { Component } from 'react';
import { render } from 'react-dom';

//IMPORT COMPONENTS
import PokemonList from './PokemonList';
import App from './App';
import ToDoList from './ToDoList';

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


render(
    <ToDoList />, 
    document.getElementById('ToDoList')
  )