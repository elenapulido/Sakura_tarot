import React from 'react'
import { selectItem } from "../App"
import {useState} from 'react'
import PrintCard from "./PrintCard"

function Draw({buttPast,buttPresent,buttFuture}) {
    let pastCard = selectItem[0]
    let presentCard = selectItem[1]
    let futureCard = selectItem[2]
   
    
    
  
    


    return (


        <div className="">
            <PrintCard selectCard = {pastCard} buttOn={buttPast}/>
            <PrintCard selectCard= {presentCard} buttOn={buttPresent}/>
            <PrintCard selectCard= {futureCard} buttOn={buttFuture}/>


        </div>
    )
}

export default Draw





