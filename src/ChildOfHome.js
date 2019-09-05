import React, { Component } from 'react'

export default class ChildOfHome extends Component {
  render() {
    // console.log('ChildOfHome render', this.props.magicNumber);
    return (
      <div>
        ChildOfHome
        {this.props.magicNumber}
      </div>
    )
  }
}
