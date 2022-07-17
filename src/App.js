import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard"

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Dashboard />
        </div>
    );
  }
}

export default App;
