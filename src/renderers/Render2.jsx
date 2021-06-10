import React from 'react'

class Render2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  clicker = (e) => {
    e.preventDefault()
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    //ONE RETURN STATEMENT :)
    //VARIABLE CHANGES BASED ON STATE

    const { clicked } = this.state;
    let message = <h1>Hey guys It's ya boi 💪</h1>
    if (!clicked)  message = null

      return (
      <div class= "container">
        <button onClick={this.clicker}>Do you want to see 😉</button>
        { message }
      </div>
      )
    }
  }

export default Render2