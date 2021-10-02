import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <>
      {/* 在父母元件的render(return)中使用子女元件，就可以構成階層的關係，就可以把父母的資料傳送給子女使用 */}
      <Child text="Hello" name="Eddy" />
    </>
  )
}

export default Parent
