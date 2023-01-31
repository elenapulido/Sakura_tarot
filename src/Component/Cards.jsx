//import { render } from "react-dom";
import { useState, useEffect } from 'react';

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

    return (
        <div className='tarot'>
            {cards.map(card => {
                return (
                    <img className='cards' key={card} src={card.sakuraCard} alt={card.englishName}></img>
                );
            })}
        </div>
    );
}


export default Cards




