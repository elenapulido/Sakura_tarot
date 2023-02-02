import React from 'react'
import { selectItem } from "../App"
import PrintCard from "./PrintCard"

function Draw({ buttPast, buttPresent, buttFuture }) {
    let pastCard = selectItem[0]
    let presentCard = selectItem[1]
    let futureCard = selectItem[2]


    return (

        <div className="box">
            <div className="past">
                <h3>Pasado</h3>
                <PrintCard selectCard={pastCard} buttOn={buttPast} />
            </div>
            <div className="present">
                <h3>Presente</h3>
                <PrintCard selectCard={presentCard} buttOn={buttPresent} />
            </div>
            <div className="future">
                <h3>Futuro</h3>
                <PrintCard selectCard={futureCard} buttOn={buttFuture} />
            </div>
        </div>
    )
}

export default Draw





