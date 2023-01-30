import { React } from 'react';


function Cards() {

    const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

    async function CallApi() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log (data)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    CallApi();
    return (<div >
        <ul>
            <li> </li>
        </ul>
        <p>SAKURA</p>
    </div>
)}


export default Cards
