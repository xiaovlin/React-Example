import React, { Component } from "react";
import Table from "./Table"
import Form from './Form'

class App extends Component {
  state = {
    characters: [
      {
        name: 'xiao',
        job: 'Java'
      },
      {
        name: 'John',
        job: 'C++'
      },
      {
        name: 'Gcar',
        job: 'JavaScript'
      },
    ]
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character]})
  }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>React From Example</h1>
        <Table characterData={ characters } removeCharacter={ this.removeCharacter }/>
        <h2>Add Data</h2>
        <Form handleSubmit={ this.handleSubmit }/>
      </div>
    )
  }
}

export default App;
