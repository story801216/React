import React, { useState } from 'react'

function App(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 在 表單完成驗証 之後，才會觸發
  const handleSubmit = (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    // ex. 再用fetch api/axios送到伺服器
    const formData = new FormData(e.target)
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      {/* ↓送出時要執行的事件onSubmit={} */}
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required // 必填
        />
        <label>Email</label>
        <input
          type="email" // html裡有內建專門檢查email的功能，但只會簡單檢查有無 @ ，與@前後是否有無文字
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
          minLength="5" // 最少輸入值為5
        />
        {/* button在form標籤裡一定要有 type=""，submit類型裡不要加上onClick事件 */}
        {/* 如果要用formData，input裡就一定要輸入name=""，因為formData是靠name去抓資料的 */}
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default App
