import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

class Conditional_Rendaring extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    const {isLoggedIn} = this.state
    //let element;
    //condition check with element
    // if (isLoggedIn) {
    //     element = <HomePage/>
    // }
    // else{
    //     element = <LoginPage/>
    // }
    // return(
    //     <div>
    //         {element}
    //     </div>
    // )

    //ternary operator
    //element = isLoggedIn ? <HomePage /> : <LoginPage />
    return (
        <div>{isLoggedIn ? <HomePage /> : <LoginPage />}</div>
    )

    //  if (this.state.isLoggedIn ) {
    //     return <HomePage/>
    //  }
    //  else{
    //     return <LoginPage/>
    // }
  }
}

export default Conditional_Rendaring