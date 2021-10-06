import React, { useState } from 'react'
// 如果表單元素要被React所操控必須滿足兩點
// 1.表單元素裡的value屬性必須為對應到某個state(狀態)值
// 2.事件的Callback函式，必須可以更動到value屬性的對應state(狀態)值
function App(props) {
  const [inputText, setInputText] = useState('') // text的狀態
  const [textArea, setTextArea] = useState('') // textarea的狀態

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <hr />
      <h2>文字區域</h2>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value)
        }}
      />
    </>
  )
}

export default App
