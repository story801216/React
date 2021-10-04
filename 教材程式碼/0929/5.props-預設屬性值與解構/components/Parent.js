import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
      {/* 在父母元件的render(return)中使用子女元件設定屬性 */}
      <Child text="Hello" name="Eddy" />
      <Child />
    </>
  )
}

export default Parent
