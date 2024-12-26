import React, { Component } from 'react'

export default class STATE extends Component {

    /**
     state make korta hole first a constructor make korta hobe
     */
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

//    create handle increment for work with button interaction
    handleIncrement =()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrement =()=>{
        this.setState({
            count: this.state.count - 1
        })
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count: {count}</h1>
        <button className='btn btn-success pb-2' onClick={this.handleIncrement} disabled={count=== 10? true: false}>+</button>
        <button className='btn btn-primary' onClick={this.handleDecrement} disabled={count=== 0? true: false}>-</button>
      </div>
    )
  }
}
