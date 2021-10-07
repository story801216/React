import React, { useState, useEffect } from 'react'

// 初始化狀態
const initialState = () => {
  console.log('initialState(like constructor in CC)')
  return 0
}

// 我們可透過鉤子(useEffect())來模擬componentDidMount()、componentDidUpdate()、componentWillUnmount()的功能

function LifecycleFC(props) {
  const [total, setTotal] = useState(initialState())

  // 使用useEffect()來模擬componentDidMount()
  useEffect(() => {
    // didMount
    console.log('componentDidMount(like)')
  }, [])

  return (
    <>
      {/* render的地方 */}
      {console.log('render')}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default LifecycleFC
