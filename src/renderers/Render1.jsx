import React from 'react'

class Render1 extends React.Component {
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
    // TWO DIFFERENT RETURN STATEMENT
    // COPY PASTING CODE ---> ???????????????
    // NO BUENO
    const { clicked } = this.state;
    if (clicked) {
      return (
      <div class= "container">
        <button onClick={this.clicker}>Do you want to see 😉</button>
        <h1>Hey guys It's ya boi 💪</h1>
      </div>
      )
    }
    return (
      <div class= "container">
        <button onClick={this.clicker}>Do you want to see 😉</button>
      </div>
    )
  }
}

export default Render1