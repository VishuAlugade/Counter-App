import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0);

  const increseValue = () => {
    if(count === 20) return;
    setCount(count + 1);
  }

    const decreaseValue = () => {
      if(count === 0) return;
      setCount(count - 1);
  }
  return (
    <>
      <h1>Simple Conter App</h1>
      <>
        <p>{count}</p>
        <button onClick={increseValue}>Increse</button>
        <button onClick={decreaseValue}>Decrease</button>
      </>
    </>
  )
}

export default App
