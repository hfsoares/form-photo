import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notifier from './components/Notifier';
import ClCamera from './components/ClCamera';

class App extends Component {
  constructor() {
    super();
    this.state = {
      offline: false
    }
  }

  componentDidMount() {
    window.addEventListener('online', () => {
      this.setState({ offline: false });
    });

    window.addEventListener('offline', () => {
      this.setState({ offline: true });
    });
  }

  componentDidUpdate() {
    let offlineStatus = !navigator.onLine;
    if (this.state.offline !== offlineStatus) {
      this.setState({ offline: offlineStatus });
    }
  }

  render() {
    return (
        <div className="App">
          <Notifier offline={this.state.offline} />
          <ClCamera offline={this.state.offline} />
        </div>
    );
  }
}

export default App;