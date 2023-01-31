//import { render } from "react-dom";
import { useState, useEffect } from 'react';
import random from './Decks';

function Cards() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
            .then((response) => {
                return response.json()
            })
            .then((cards) => {
                setCards(cards)
            })
    }, [])

console.info(cards)

    return (
        <div className='tarot'>
            {random(cards).map(card => {
                return (
                    <img className='cards' id={card.id} key={card.id} src={card[0].sakuraCard} alt={card[0].englishName}></img>
                );
            })}
        </div>
    );


}



export default Cards




