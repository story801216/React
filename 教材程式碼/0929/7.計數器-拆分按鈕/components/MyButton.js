import React from 'react'
// 子女元件
function MyButton(props) {
  const { text, value, setTotal, total } = props

  return (
    <>
      <button
        onClick={() => {
          setTotal(total + value)
        }}
      >
        {text}
      </button>
    </>
  )
}

export default MyButton
