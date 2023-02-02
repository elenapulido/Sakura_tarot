import Card from "./Component/Card";
import { React} from 'react';
import { useState, useEffect } from "react";


function App() {

  let [counter,setCounter] = useState(0)
  const [cards, setCards] = useState([])
  //const [draw, setDraw]

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch ('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
      const cards = await response.json();
      setCards(cards);
    }
  fetchData()
    .catch(console.error)
  }, [])

  const increaseCounter = () => {
    counter++
    setCounter(counter)
  }

  const shuffleCards = () => {
    const nextList = [...cards];
    nextList.sort((a, b) => 0.5 - Math.random());
    setCards(nextList);
  }

  let cardsList = cards.map((card) =>
  <Card key={card.id} card={card} increaseCounter={increaseCounter} clickCounter={counter}/>
  )

  return (
    <div>
      <div className="tarot">
      {cardsList}
    </div>

    <div className="btn-shuffle">
      <button onClick={shuffleCards}>Shuffle</button>
    </div>

  </div>
  
  )
}


export default App;
