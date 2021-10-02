import React, { useState } from 'react'

function FormFC() {
  // [得到狀態, 設定狀態] = useState(初始值)
  // state(物件值)初始值 "不要寫" 以下幾種：null, {} , 沒寫
  // 要把物件值中的屬性描述寫出來
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  return (
    <>
      <h2>FormFC 函式型元件</h2>
      username:
      {/* input如果要被React所操控的話，就必須要加上value = {對應的初始值} 以及可變動的狀態 onChange = {} */}
      <input
        type="text"
        value={loginData.username}
        onChange={(event) => {
          setLoginData({
            ...loginData, // 必須先將原本的資料做展開後，再把新的資料輸入進去
            username: event.target.value,
          })
        }}
      />
      password:
      <input
        type="text"
        value={loginData.password}
        onChange={(event) => {
          setLoginData({
            ...loginData, // 必須先將原本的資料做展開後，再把新的資料輸入進去
            password: event.target.value,
          })
        }}
      />
    </>
  )
}

export default FormFC
