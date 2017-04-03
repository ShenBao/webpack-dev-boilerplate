import React, { Component } from 'react';
import { MyComponent } from '../../components';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyComponent />
        <p>
          欢迎在github上点赞<br />
          https://github.com/ShenBao
        </p>
      </div>
    );
  }
}

export default App;
