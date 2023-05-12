import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Mindaugas0'
        },
        {
          name: 'Mindaugas1'
        },
        {
          name: 'Mindaugas2'
        },
        {
          name: 'Mindaugas3'
        }
      ]
    }
  }

  render() {
    return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return <h1>{ monster.name }</h1>
        })
      }
    </div>
    );
  }
}

export default App;