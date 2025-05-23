import { useState } from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Lottery n={3} winSum={15}/>
    </>
  )
}

export default App
