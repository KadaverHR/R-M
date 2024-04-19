import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { getCharacter } from 'rickmortyapi'
// import { ItemList } from './ItemList/ItemList.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <ItemList /> */}
  </React.StrictMode>,
)

