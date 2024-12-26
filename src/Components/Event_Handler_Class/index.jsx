import React, { Component } from 'react'

export default class Event_Handler_Class extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue: ''
    }
  }
  
  //create function for check onChange data 
  handleOnChange = (e)=>{
    this.setState({
      changedValue: e.target.value
    })
  }
  render() {
    return (
      <div>
       <input type='text' onChange={this.handleOnChange}/>
       <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
