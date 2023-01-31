import Card from "./Component/Card";
import { React} from 'react';
import { useState, useEffect } from "react";

function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch ('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
      const data = await response.json();
      setCards(data);
    }
  fetchData()
    .catch(console.error)
  }, [])

  let cardsList = cards.map((card) =>
  <Card key={card.id} card={card} />
  )

  const shuffleCards = () => {
    const nextList = [...cards];
    nextList.sort((a, b) => 0.5 - Math.random());
    setCards(nextList);
  }

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
