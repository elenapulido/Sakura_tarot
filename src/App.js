import Card from "./Component/Card";
import { React } from 'react';
import { useState, useEffect } from "react";
import Draw from "./Component/Draw";


export let selectItem = []

function App() {

 
  const [cards, setCards] = useState([])
  const [buttPast, setButtPast] = useState(false)
  const [buttPresent, setButtPresent] = useState(false)
  const [buttFuture, setButtFuture] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
      const cards = await response.json();
      setCards(cards);
    }
    fetchData()
      .catch(console.error)
  }, [])



  

  const shuffleCards = () => {
    const nextList = [...cards];
    nextList.sort((a, b) => 0.5 - Math.random());
    setCards(nextList);
  }

  const selectCard = (item) => {
    console.info(selectItem.length)
    
    if (selectItem.length >= 0) {
      setButtPast(true)
    }
    if (selectItem.length >= 1) {
      setButtPresent(true)
    }
    if (selectItem.length >= 2) {
      setButtFuture(true)
    }
    selectItem.push(item)

  }

  let cardsList = cards.map((card) =>
    <Card key={card.id} card={card}  selectCard={selectCard} />
  )



  return (
    <div>
      <div className="tarot">
        {cardsList}
      </div>

      <div className="btn-shuffle">
        <button onClick={shuffleCards}>Shuffle</button>

      </div>
      <Draw buttFuture={buttFuture} buttPast={buttPast} buttPresent={buttPresent}/>
      

    </div>

  )
}


export default App;
