import React, { Component } from 'react';
import './styles/Masthead.css';
import MastheadIntro from './MastheadIntro';

export default class Masthead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: false,
      returningUser: false,
    }
  }

  render() {
    return (
      <div id="masthead">
        <MastheadIntro />
      </div>
    )
  }
}
