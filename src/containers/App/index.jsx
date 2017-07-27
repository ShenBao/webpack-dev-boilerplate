import React, { Component } from 'react';
import { MyComponent } from '../../components';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var d = new Date()
    return (
      <div>
        <MyComponent />
        <p>ShenBao</p>
      </div>
    );
  }
}

export default App;
