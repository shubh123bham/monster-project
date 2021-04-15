import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/CardList/card-list.component'
import {SearchBar} from './Components/search-bar/search-bar.component'

class App extends Component
{
  constructor()
  {
    super();
    this.state =
    {
    monsters : [],
    searchFeild:""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(users => this.setState({monsters : users}))
  }

  handleChange(e) 
  {
    this.setState({searchFeild:e.target.value})
  }

  render()
  {
    const {monsters,searchFeild} = this.state;
    const filterMosnter = monsters.filter(monster =>                        //expect a return value from arrow function, confused in when to use JSX and when to not
    monster.name.toLowerCase().includes(searchFeild.toLowerCase()))

    return (
    <div className="App">
      <h1 className = "heading">Monster Application</h1>
      <SearchBar 
      placeholder = "monster name"
      handleChange = {this.handleChange}
      />
      <CardList 
      monsters={filterMosnter} 
      /> 
      
    </div>
    );
  }
}

export default App;
