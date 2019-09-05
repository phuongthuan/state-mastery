import React, { Component } from 'react'

export default class ChildOfHomeBrother extends Component {
  state = {
    magicNumber: 0
  }

  componentDidMount() {
    this.setState({
      magicNumber: this.props.magicNumber
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);

    if (prevProps.magicNumber !== this.state.magicNumber) {
      this.setState({ magicNumber: prevProps.magicNumber });
    }
  }
  
  
  render() {
    // console.log('ChildOfHomeBrother render', this.state.magicNumber);
    return (
      <div>
        ChildOfHomeBrother
        {this.state.magicNumber}
      </div>
    )
  }
}
