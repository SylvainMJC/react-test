import React, { Component } from 'react';
import axios from 'axios';



export default class PokemonList extends Component {
    
  constructor() {
    super();
    this.state = {
      pokemons: []
    }
  }
  
    componentDidMount() {
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=5`)
        .then(res => {
          const pokemons = res.data.results;
          this.setState({ pokemons });
        })
    }
  
    render() {
      console.log(this.state.pokemons);
      return (
        <ul>
          { this.state.pokemons.map(pokemon => <li key = {pokemon.url}><a href = {pokemon.url}>{pokemon.name}</a></li>)}
        </ul>
      )
    }
  }

  
  