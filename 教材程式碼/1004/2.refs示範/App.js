import React from 'react'
import InputId from './components/InputId'
import InputRefs from './components/InputRefs'

function App(props) {
  return (
    <>
      {/* 因為對於html id是唯一值，所以第二個InputId元件就只會對應到第一個InputId的input欄位 */}
      <InputId />
      <InputId />
      {/* 但是使用React的Refs方式 就可以重複利用，因為他們的id會由react內部獨立給予*/}
      <InputRefs />
      <InputRefs />
    </>
  )
}

export default App
