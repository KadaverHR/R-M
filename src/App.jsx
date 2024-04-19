import { useState, useEffect } from 'react'

import { createRoot } from 'react-dom/client';
import axios, { isCancel, AxiosError } from 'axios'
import { ItemCard } from './ItemCard/ItemCard'
import './App.css'
// import './helper.js'


function App() {
  const [card, setCard] = useState(null)

  const apiURL = 'https://rickandmortyapi.com/api/character/?page=1'

  const fetchCard = async () => {
    const response = await axios.get(apiURL)

    const cardsArray = response.data.results
    console.log(cardsArray);
    setCard(cardsArray)

  }
  useEffect(() => {

    fetchCard()
  }, [])

  return (
    <div className="App" >

      {/* <button onClick={fetchCard}>
        ЖМИ
      </button> */}
      <ul>
        {card && card.map((item) => (
          <li key={item.id}>
            <ItemCard {...item} />
            {/* {item.id} */}
          </li>
        ))}
      </ul>
    </div >

  );

}

export default App
