import Cards from "./Component/Cards";

class cards extends Component {
    render() {
      const data = [{cards}]
      let tarot = [];
      for (let i = 0; i<data.length; i++){
        tarot.push(<div>{data[i].card + ", " + data[i].id}</div>)
      }
      return <div>
      {tarot}
      </div>
    }
}

function getRandomInt(max) {
    return Math.round(Math.random() * max) cards: length;
}

export default Decks