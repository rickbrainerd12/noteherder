import React, { Component } from 'react'

import Main from './Main'
import './App.css'

class App extends Component {
  constructor(){
    super()

    this.state = {
      notes: {
        'note-1': {
            id: 'note-1',
            title: 'My fancy note from App',
            body: 'This note is so fancy!',
        },
        'note-2': {
            id: 'note-2',
            title: 'another one from App',
            body: 'also fancy',
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main notes = {this.state.notes} />
      </div>
    );
  }
}

export default App;
