
import React, { Component } from "react";
import MTGcards from "./MTGcards";
import axios from 'axios';
import "../scss/TodoList.scss";
import "../scss/autocomplete.scss"
import Autocomplete from "./Autocomplete";

class MTGbuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
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
                        img_url: card.image_uris.small, // can be small, normal, large, art_crop
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
           
          console.log(this.state.cards);
             
          e.preventDefault();
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




    render() {
        console.log(this.state.cards);
        return (
        <div>
            <div>
                <form onSubmit={this.addCard}>
                    <input  ref={(a) => this._inputElement = a} placeholder="enter card name">
                    </input>
                    <Autocomplete/>

                    <button className="btn btn-success" type="submit">add card</button>
                </form>
            </div>
            <MTGcards   entries={this.state.cards}
                        delete={this.deleteCard}/>
        </div>
        );
    }
}
 
export default MTGbuilder;