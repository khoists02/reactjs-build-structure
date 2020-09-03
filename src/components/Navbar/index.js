import React, { Component } from 'react';
import CounterHook from '../../hooks/CounterHook';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <CounterHook></CounterHook>
      </div>
    )
  }
}

export default Navbar;