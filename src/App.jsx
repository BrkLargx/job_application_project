import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>İş ilan portalı</h1>
      <div className="header">
        <div className="arama_kutusu">
          <input type="text" placeholder='iş ilanı arayın' />
          <button id="arama_butonu">Ara</button>
        </div>
      </div>
    </div>
  )
}

export default App
