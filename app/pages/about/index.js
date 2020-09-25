import React, { Component } from 'react';
import { Logo, Navigation } from '../../components';

export default class extends Component {
  render () {
    return (
      <div>
        <Logo />
        <Navigation />
        <div>About</div>
      </div>
    )
  }
};
