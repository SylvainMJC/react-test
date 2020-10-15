import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

class MTGcards extends Component {
    
    constructor(props) {
        super(props);
        this.createCards = this.createCards.bind(this);


    }

    delete(key) {
        this.props.delete(key);
    }

    // addToQuantity = e =>{
    //     console.log("add")
    //     if(this.state.quantity>0 && this.state.quantity<4){
    //         this.state.quantity++
    //     }
    //     else if(this.state.quantity = 4){
    //         console.log("you can't have more than 4 times a card in a deck.")
    //     }

    // }

    // substractToQuantity = e =>{
    //     console.log("add")
    //     if(this.state.quantity>0 && this.state.quantity<5){
    //         this.state.quantity--
    //     }
    //     else if(this.state.quantity = 0){
    //         this.delete(this.state.key)
    //     }

    // }

    createCards(card) {
        // const [isShown, setIsShown] = useState(false);
        
        // const keyplus=card.key+"-plus"
        // const keyminus=card.key+"-minus"
        return <li className="nameMTGcard" key={card.key}>
                   
                        {/* {this.state.quantity} */}
                        1 x {card.name}
                        
                    <button className="badge" 
                        // onClick={() => this.addToQuantity()} key={keyplus}
                        >
                        <i className="fas fa-plus" aria-hidden="true" ></i>
                    </button>
                    <button className="badge"
                        // onClick={() => this.substractToQuantity()} key={keyminus}
                        >
                        <i className="fas fa-minus" aria-hidden="true" ></i>
                    </button>
                    

                    <div className="imgMTGcard">
                        <img className="imgcard" src = {card.img_url}></img>
                    </div>
                </li>
              
              
    }
    // componentDidMount() {
    //     let liImg = ReactDOM.findDOMNode(this);
    //     console.log(lilImg);
    //     let img = liImg.getElementByTagName('DIV');
    //     console.log(img);

    //     const onMouseMove = (e) =>{
    //         img.style.left = e.pageX + 'px';
    //         img.style.top = e.pageY + 'px';
    //     }
        
    //     document.addEventListener('mousemove', onMouseMove);
    //    }

    render() {
        var todoEntries = this.props.entries;
        var listCards = todoEntries.map(this.createCards);
    
        return (
        <ul className="cardList">
            {listCards}
        </ul>
        );
    }
};
 
export default MTGcards;