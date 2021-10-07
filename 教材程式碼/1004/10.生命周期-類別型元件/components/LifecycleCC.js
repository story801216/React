import React, { Component } from 'react'

// 生命週期是專門給類別型元件使用
// 生命週期的方法呼叫順序
// 生成網頁時: constructor() → render() → componentDidMount()
// 元件更動時: render() → componentDidUpdate()
// 元件因為「父元件」關係從網頁上而被移除時: componentWillUnmount()

class LifecycleCC extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default LifecycleCC
