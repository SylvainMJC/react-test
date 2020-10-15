
import React, { Component, Fragment } from "react";
import MTGcards from "./MTGcards";
import axios from 'axios';
import debounce from 'lodash.debounce';

import PropTypes from "prop-types";
import "../scss/TodoList.scss";
import "../scss/mtg.scss"

class MTGbuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            
                // The active selection's index
            activeSuggestion: 0,
                // The suggestions that match the user's input
            filteredSuggestions: [],
                // Whether or not the suggestion list is shown
            showSuggestions: false,
                // What the user has entered
            userInput: "",
              
            timer:0 //en secondes, tck tout les dizèmes de secondes
        };
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);

        // Delay action 2 seconds
        //this.onChangeDebounced = debounce(this.onChangeDebounced, 2000)
    }

     

    addCard(e) {
        console.log('add card');

        

        if (this._inputElement.value !== "") {
            
            let url = 'https://api.scryfall.com/cards/named?exact=';
            url = url.concat(this._inputElement.value);
            axios.get(url)
                .then(res => {
                    let card;
                    console.log(res.data)
                    if(res.data.card_faces){
                        card=res.data.card_faces[0]
                    }
                    else{
                        card=res.data
                    }
                    var uniqid = require('uniqid');
                    let newCard = {
                        name: card.name,
                        quantiy: 1,
                        img_url: card.image_uris.normal, // can be small, normal, large, art_crop
                        key: uniqid(),
                    }
                    this.setState((prevState) => {
                        return { 
                          cards: prevState.cards.concat(newCard) 
                        };
                      });
                }, 
                (error) => {
                    console.log(error);
                  });
           
            this._inputElement.value = "";
          }
           
          //console.log(this.state.cards);
             
          e.preventDefault();
    }
    saveDeck(){
        

        //console.log("/*************** SAVE DECK *****************/");
    }

    addRandomCard = e =>{
        let url = 'https://api.scryfall.com/cards/random';
        axios.get(url)
                .then(res => {
                    let card;
                    console.log(res.data)
                    if(res.data.card_faces){
                        card=res.data.card_faces[0]
                    }
                    else{
                        card=res.data
                    }
                    var uniqid = require('uniqid');
                    let newCard = {
                        name: card.name,
                        quantity: 1,
                        img_url: card.image_uris.normal, // can be small, normal, large, art_crop
                        key: uniqid(),
                    }
                    this.setState((prevState) => {
                        return { 
                          cards: prevState.cards.concat(newCard) 
                        };
                      });
                }, 
                (error) => {
                    console.log(error);
                });
                
        console.log(this.state.cards);
             
        e.preventDefault();

        console.log("/*************** ADD RANDOM CARD *****************/");
    }

    

    deleteCard(key) {
        console.log('delete card');
        var filteredCards = this.state.cards.filter(function (card) {
            return (card.key !== key);
        });

        this.setState({
            cards: filteredCards
        });
    }

    /**********************AUTO COMPLETE FORM FIELD********************** */

    onChange = (e) => {
        // Immediately update the state
        const userInput = e.currentTarget.value;
        console.log("/****************userInput****************/");
        console.log(userInput);
        this.setState({
          userInput
        })
        
        
        // Without "this"
        setTimeout(this.onChangeDelayed(e), 1500)

      }

    // Event fired when the input value is changed
    onChangeDelayed = e => {

        //let { suggestions } = this.props;
        //const userInput = this.state.userInput;
        
        let url = 'https://api.scryfall.com/cards/autocomplete?q=';
        url = url.concat(e.currentTarget.value);
        axios.get(url)
        .then(res => {
            console.log("/*********** Réponse API ************/")
            console.log(res);
            //const filteredSuggestions = res.data.data;
            this.setState({
                activeSuggestion: 0,
                filteredSuggestions: res.data.data,
                showSuggestions: true
            }, function(){
                console.log("/*************STATE*******************/")
                console.log(this.state);
            });
            //console.log(state);
        }, 
        (error) => {
            console.log(error);
        });
        // Filter our suggestions that don't contain the user's input
        // const filteredSuggestions = suggestions.filter(
        //   suggestion =>
        //     suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // );

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        // this.setState({
        //   activeSuggestion: 0,
        //   filteredSuggestions,
        //   showSuggestions: true,
        //   userInput: e.currentTarget.value
        // });
    };

    // Event fired when the user clicks on a suggestion
    onClick = e => {
        // Update the user input and reset the rest of the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
        this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
        });
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
        if (activeSuggestion === 0) {
            return;
        }

        this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
        if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
        }

        this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };


    render() {
        console.log(this.state.cards);
        const {
            onChange,
            onClick,
            onKeyDown,
            addCard,
            addRandomCard,
            saveDeck,
            deleteCard,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput
            }
          } = this;
      
          let suggestionsListComponent;
      
          if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
              suggestionsListComponent = (
                <ul className="suggestions" id="suggestions">
                  {filteredSuggestions.map((suggestion, index) => {
                    let className;
      
                    // Flag the active suggestion with a class
                    if (index === activeSuggestion) {
                      className = "suggestion-active";
                    }
      
                    return (
                      <li
                        className={className}
                        key={suggestion}
                        onClick={onClick}
                      >
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div className="no-suggestions">
                  <em>No suggestions, you're on your own!</em>
                </div>
              );
            }
          }



        return (
        <div>
            <div>
                <form onSubmit={addCard}>
                    {/* <input ref={(a) => this._inputElement = a} placeholder="enter card name"> */}
                    {/* </input> */}
                    <Fragment>
                        <input
                        ref={(a) => this._inputElement = a}
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        placeholder="enter a card name"
                        />
                        {suggestionsListComponent}
                    </Fragment>

                    <button className="btn btn-success ml-4" type="submit">add card to deck</button>
                    
                </form>
                <form onSubmit={addRandomCard}>
                    <button type="submit" className="btn btn-success ml-4 mt-2 mb-2">Add Random Card</button>
                    
                </form> 
                
            </div>
            <MTGcards   entries={this.state.cards}
                        delete={deleteCard}/>

            <button onClick={saveDeck()} className="btn btn-success ml-4 mt-4">Save Deck!</button>
        </div>
        );
    }
}
 
export default MTGbuilder;