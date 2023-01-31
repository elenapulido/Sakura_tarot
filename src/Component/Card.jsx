
function Card(props) {

   const printCardName = () => {
        console.log(props.card.englishName + ":" + props.card.meaning);
   }
    
   return (
    <div className="">
        <img className="cards" id={props.card.id} key={props.card.id} src={props.card.sakuraCard} alt={props.card.englishName} onClick={printCardName}></img>
    </div>
   );

}


export default Card




