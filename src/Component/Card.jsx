import { useState } from "react";

function Card(props) {

    const [displayCard, setDisplayCard] = useState(props.card.cardsReverse.sakuraReverse);

    const showCard = () => {
        props.increaseCounter()
        setDisplayCard(props.card.sakuraCard)
    }


    return (
        <div className="">
            <img
                className="cards"
                key={props.card.id} id={props.card.id} src={displayCard} alt={props.card.englishName}
                onClick={showCard}>
            </img>

        </div>


    );
}







export default Card





