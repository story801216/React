import { useState } from 'react'

function App() {
  // [得到狀態, 設定狀態] = useState(初始值)
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1) // 設定狀態(目前狀態+1)
        }}
      >
        {total}
      </h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </>
  )
}

export default App
