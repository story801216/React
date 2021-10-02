import React from 'react'

// React.Component 是一個React裡的一個類別(class)
// 使用類別型的起手式
// 1.建構式:constructor()
// 2.去呼叫父母類別也就是React.Component:super()
// 3.定義狀態初始值:this.state
// 4.再用render()方法將畫面渲染出來
class CounterCC extends React.Component {
  constructor() {
    super()
    // 定義狀態的初始值
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({
              total: this.state.total + 1,
            })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CounterCC
