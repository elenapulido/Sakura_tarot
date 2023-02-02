import { useState } from "react";
import {selectItem} from "../App"

function Card(props) {

    const [displayCard, setDisplayCard] = useState(props.card.cardsReverse.sakuraReverse);

    const showCard = (card) => {
        
        if (selectItem.length < 3 ){
            props.increaseCounter()
            setDisplayCard(props.card.sakuraCard)
            props.selectCard(card)
        } 
    }


    return (
        <div className="">
            <img
                className="cards"
                key={props.card.id} id={props.card.id} src={displayCard} alt={props.card.englishName}
                onClick={()=>showCard(props.card)}>
            </img>

        </div>


    );
}







export default Card





