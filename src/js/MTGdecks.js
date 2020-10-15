import React, { Component, Fragment } from "react";



class MTGdecks extends Component {
    
    constructor(props) {
        super(props);
        
        this.createDecks = this.createDecks.bind(this);


    }

    delete(key) {
        this.props.delete(key);
    }

    

    createDecks(card) {
        // const [isShown, setIsShown] = useState(false);

        return <li className="nameMTGdeck" key={deck.key}>
                   
                        {card.name}
                        
                    
                    <i className="fas fa-times" aria-hidden="true" onClick={() => this.load(deck.key)} key={deck.key}></i>
                    
                </li>
              
              
    }
    
    render() {
        var todoEntries = this.props.entries;
        var listDecks = todoEntries.map(this.createDecks);
    
        return (
        <ul>
            {listDecks}
        </ul>
        );
    }
};
 
export default MTGdecks;