import { useEffect, useState } from 'react'
import init, { add } from 'wasm-lib' // our wasm module
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [ans, setAns] = useState(0)

  useEffect(() => {
    init().then(() => {
      setAns(add(1, 2))
    });
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + WebAssembly</h1>
      <div className="card">
        <p>
          1 + 2 = {ans}
        </p>
      </div>
    </div>
  )
}

export default App
