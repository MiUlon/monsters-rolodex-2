import { Component } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-bpx.components';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => {
        this.setState(() => {
          return { monsters: user}
        },
        )
      })
  }

  onSearchFieldChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField: searchField }
      })
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchFieldChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' placeholder='Search monsters' onSearchFieldChange={onSearchFieldChange} />
      <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;