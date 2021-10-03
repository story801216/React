import React, { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('ChildB Data')
  // 按下按鈕後就會把字串傳送給Parent.js
  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(childBData)
        }}
      >
        設定資料到Parent
      </button>
    </>
  )
}

export default ChildB
