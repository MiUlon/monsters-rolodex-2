import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Mindaugas0',
          id: '0'
        },
        {
          name: 'Mindaugas1',
          id: '1'
        },
        {
          name: 'Mindaugas2',
          id: '2'
        },
        {
          name: 'Mindaugas3',
          id: '3'
        }
      ]
    }
  }

  render() {
    return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return  <div key={monster.id}>
                    <h1>{ monster.name }</h1>
                  </div>
        })
      }
    </div>
    );
  }
}

export default App;