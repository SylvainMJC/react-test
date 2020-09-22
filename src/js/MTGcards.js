import React, { Component, useState } from "react";
 
class MTGcards extends Component {
    
    constructor(props) {
        super(props);
        
        this.createCards = this.createCards.bind(this);


    }

    delete(key) {
        this.props.delete(key);
    }

    

    createCards(card) {
        // const [isShown, setIsShown] = useState(false);

        return <li className="nameMTGcard" key={card.key}>
                    <p>
                        {card.name}
                        
                    </p>
                    <i className="fas fa-times" aria-hidden="true" onClick={() => this.delete(card.key)} key={card.key}></i>
                    <i class="fas fa-plus"></i>
                    <i class="fas fa-minus"></i>

                    <div className="imgMTGcard">
                        <img src = {card.img_url}></img>
                    </div>
                </li>
              
              
    }
    
    render() {
        var todoEntries = this.props.entries;
        var listCards = todoEntries.map(this.createCards);
    
        return (
        <ul>
            {listCards}
        </ul>
        );
    }
};
 
export default MTGcards;