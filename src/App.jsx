import './App.css'
import Button from './components/Button/Button'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>
        <span>ボタンクリック：{count}</span>
      </Button>
    </>
  )
}

export default App