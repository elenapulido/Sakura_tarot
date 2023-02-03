import React from 'react'
import { selectItem } from "../App"
import PrintCard from "./PrintCard"

function Draw({ buttPast, buttPresent, buttFuture }) {
    let pastCard = selectItem[0]
    let presentCard = selectItem[1]
    let futureCard = selectItem[2]


    return (
        <div>
            <div className="paragraph">
                <p>Selecciona tres cartas y conoce tu predicción</p>
            </div>
            <div className="box">

                <div className="past">
                    <h3 className='tittlePast'>Pasado</h3>
                    <PrintCard selectCard={pastCard} buttOn={buttPast} />
                </div>
                <div className="present">
                    <h3 className='tittlePresent'>Presente</h3>
                    <PrintCard selectCard={presentCard} buttOn={buttPresent} />
                </div>
                <div className="future">
                    <h3 className='tittleFuture'>Futuro</h3>
                    <PrintCard selectCard={futureCard} buttOn={buttFuture} />
                </div>
            </div>
        </div>
    )
}

export default Draw





