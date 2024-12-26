import React, { Component } from 'react'

export default class Hooks_UseState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    handleIncrement = () => {
      this.setState({
        count : this.state.count + 1
      })
    }
    
  render() {
    const {count} = this.state;
    return (
      <div>
        <p>with class component</p>
        <h1>Count : {count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
