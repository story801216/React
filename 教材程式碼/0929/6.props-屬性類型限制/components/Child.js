import React from 'react'
import PropTypes from 'prop-types'

function Child(props) {
  // 先解構出屬性名稱變數
  const { name, text } = props

  return (
    <>
      {/* 子女元件透過props得到父母元件傳來的資料 */}
      <h1>{name}</h1>
      <p>{text}</p>
    </>
  )
}

Child.defaultProps = {
  name: 'Amy',
  text: 'Hello',
}
// 限制為字串，並且為必要，如果審查不通過就會跳Warning
Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
// 更進階的審查工具可以學習Typescript
export default Child
