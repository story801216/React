import React, { useState } from 'react'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('') // 下拉選單select的狀態
  // radio - 狀態記錄是被選中選項按鈕的值，只會只有一個
  const [gender, setGender] = useState('')

  return (
    <>
      <h1>可控表單元素</h1>
      <section id="inputText">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      {/* 這邊下section id="" 只是方便程式碼折疊而已，無其他用途 */}
      <section id="textArea">
        <h2>文字區域</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="selectedOption">
        <h2>下拉選單</h2>
        {/* 下拉選單的可控必要條件位置是放在select裡面 */}
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value)
          }}
        >
          {/* 如果useState('')是用option value=""的值，那麼預設的選項就會是"請選擇" (對應到"") */}
          <option value="">請選擇</option>
          <option value="雞腿">雞腿</option>
          <option value="魯肉">魯肉</option>
          <option value="排骨">排骨</option>
        </select>
      </section>
      <section id="radioGroup">
        <h2>選項按鈕</h2>

        {/* 如果初始狀態為useState('男')，那麼會預設為男這個選項按鈕<input value="男"> */}
        {/* 選項按鈕的可控必要條件有二 1. checked={被選中的狀態}，2. onChange={(e)=>{設定狀態(e.target.value)}}*/}
        {/* 可在狀態裡記錄value的值，再用value的值做判斷是否有被選中 */}

        <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>男</label>
        <br />
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>女</label>
        <br />
        <input
          type="radio"
          value="未定"
          checked={gender === '未定'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>未定</label>
        <br />
      </section>
    </>
  )
}

export default App
