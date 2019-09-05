import React, { Component } from 'react'
import _ from 'lodash';
import ChildOfHome from './ChildOfHome';
import ChildOfHomeBrother from './ChildOfHomeBrother';
import ChildOfHomeSister from './ChildOfHomeSister';

const incrementCounter = key => state => {
  return {
    [key]: state[key] + 1,
  }
}

export default class Home extends Component {

    state = {
        magicNumber: 23,
        firstName: '',
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.randomMagicNumber(),
        1000
      )
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    randomMagicNumber = () => {
      return this.setState({
        magicNumber: _.random(100),
      });
    }

    handleChange = (e) => {
      const { checked, name, value, type } = e.target;
      const valueToUpdate = type === 'checkbox' ? checked : value;
      this.setState({
        [name]: valueToUpdate,
      }, () => this.logFields());

      this.handleCounter();
    }

    handleCounter = () => {
      this.setState(incrementCounter('counter'));
    }

    handleIsValid = () => {
      this.setState(state => {
        return {
          isValid: !state.isValid,
        }
      });
      this.handleCounter();
    }
    
    logFields = () => {
      const { firstName, lastName } = this.state;
      console.log('Full name', `${firstName} ${lastName}`);
    }
    
  render() {
    return (
      <div>
        {this.state.magicNumber}
        Home
        {/* <ChildOfHome magicNumber={this.state.magicNumber} /> */}
        {/* <ChildOfHomeBrother magicNumber={this.state.magicNumber} /> */}
        {/* <ChildOfHomeSister magicNumber={this.state.magicNumber} /> */}
        Home Component

        <h1>First Name: {this.state.firstName}</h1>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input onChange={this.handleChange} name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input onChange={this.handleChange} name="lastName" />
        </form>
      </div>
    )
  }
}
