import React, { Component } from 'react'
import './App.css'

let artists = [
  {
    name: 'Pablo Picasso'
  },
  {
    name: 'Vincent Van Gogh'
  },
  {
    name: 'Claude Monet'
  },
  {
    name: 'Salvador Dali'
  },
]

class App extends Component {
  state = {
    searchQuery: '',
    initialState: artists,
    searchedData: []
  }

  handleSearch = (e) => {
    const searchQuery = e.target.value && e.target.value.toLowerCase()
    console.log(searchQuery)

    this.setState(prevState => {
      const searchedData = prevState.initialState.filter(item => {
        return item.name.toLowerCase().includes(searchQuery)
      })
      return {
        searchQuery,
        searchedData
      }
    })

  }

  render(){

    let searched = this.state.searchQuery === "" ?
       this.state.initialState && this.state.initialState.map((artist, index) => {
        return (
          <p key={index}>{artist.name}</p>
        )
      })
       :
      this.state.searchedData && this.state.searchedData.map((artist, index) => {
        return (
          <p key={index}>{artist.name}</p>
        )
      })

    return (
      <div className="App">
        <header className="">
          <input
            type="text"
            placeholder="Search for..."
            onChange={this.handleSearch}
            id="search"
            name="search" />
        </header>
        <main>
          {searched}
        </main>
      </div>
    )
  }
}


export default App
