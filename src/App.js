import React, { Component } from 'react'

import Main from './Main'
import './App.css'

class App extends Component {
  constructor(){
    super()
    
    this.setCurrentNote = this.setCurrentNote.bind(this)

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
        },
      },
      currentNote: this.blankNote
    }
  }

  blankNote = ()=> {
    return{
          id: null,
          title: '',
          body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({currentNote: note})
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if(!note.id){
      note.id = Date.now()
    }
    notes[note.id] = note
    this.setState({notes: notes, currentNote: note})
  }

  render() {
    const actions ={
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
    }

    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }

    return (
      <div className="App">
        <Main {...actions}
              {...noteData}

        />
      </div>
    );
  }
}

export default App;
