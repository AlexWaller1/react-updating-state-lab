// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
// state goes in the constructor() because constructor goes first
// we super() because we are inheriting from the React class
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }))
    }
    // handleClick will modify our state
    // using prevState will allow us to modify our state more easily
    // that way we don't have to pass in an object declared 
    // outside of setState()
   

    render() {
        return (
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        );
    }
// render() is returning a button with the onClick event handler
// our button will actually render the current state of the
// DigitalClicker component

}

export default DigitalClicker

// this.state {
// timesClicked:0
// }