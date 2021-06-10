import React from 'react'

class Render3 extends React.Component {
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
    //NO VARIABLE ???? :O
    //NO WRAPPED IF
    //SOME COPY PASTING??!!?
    const { clicked } = this.state;

    return (
      <div class= "container">
        <button onClick={this.clicker}>Do you want to see 😉</button>
        { clicked ? <h1>Hey guys It's ya boi 💪</h1> : <h1> some thing else</h1> }
      </div>
    )
  }
}

export default Render3