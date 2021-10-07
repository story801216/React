import React, { useState, useEffect } from 'react'

const initialState = () => {
  console.log('initialState(like constructor in CC)')
  return 0
}

function LifecycleFC(props) {
  const [total, setTotal] = useState(initialState())
  const [didMount, setDidMount] = useState(false) // 預設didMount的初始狀態為false，就不會一開始載入後就執行

  // 模擬componentDidMount
  useEffect(() => {
    // didMount
    console.log('componentDidMount(模擬)')

    // 載入頁面且生成元件完後設定目前進入didMount階段，之後元件產生變化後就會執行didMount
    setDidMount(true)
  }, [])

  // 模擬componentDidUpdate+componentDidMount
  // 載入頁面時didMount會因為total的改變也會執行一次(一開始載入時total是沒有值的，但因為給予「初始值」後就「變成」有值了)
  useEffect(() => {
    console.log('componentDidUpdate+componentDidMount(模擬)', total)
  }, [total])

  // 只模擬componentDidUpdate
  // 利用didMount狀態值來完整模擬
  // eslint會有警告(注意：不需要加入didMount狀態在依賴陣列中)
  useEffect(() => {
    if (didMount) {
      console.log('componentDidUpdate(模擬)', total)
    }
  }, [total])

  return (
    <>
      {console.log('render')}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default LifecycleFC
