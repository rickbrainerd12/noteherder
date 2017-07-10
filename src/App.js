import React, { Component } from 'react'

import base, { auth } from './base'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      currentNote: this.blankNote(),
      uid: null,
    }
  }

  componentWillMount = () => {
    auth.onAuthStateChanged(
      (user) =>{
        if(user){
          //signed in
          this.handleAuth(user)
        } else {
          //signed out
          this.setState({uid: null})

        }
      }
    )
  }

  syncNotes = () => {
    base.syncState(
      `${this.state.uid}/notes`, {
        context: this, //What object the state is on
        state: 'notes', //Which property of state to sync
      }
    )
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if (!note.id) {
      note.id = Date.now()
    }
    notes[note.id] = note

    this.setState({ notes })
    this.setCurrentNote(note)
  }

  removeCurrentNote = () => {
    const notes = {...this.state.notes}
    notes[this.state.currentNote.id] = null

    this.setState({ notes })
    this.resetCurrentNote()

    console.log('is works')
  }

  signedIn = () => {
      return this.state.uid
  }

  handleAuth = (user) => {
    this.setState(
      {uid: user.uid},
       this.syncNotes
    )
  }

  signOut = () => {
    auth.signOut()
  }

  renderMain() {
     const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
      signOut: this.signOut,
    }

    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }

    return (
      <Main
          {...actions}
          {...noteData}
      />
    )
  }

  render() {

    return (
      <div className="App">
        {this.signedIn() ? this.renderMain() : <SignIn />}
      </div>
    );
  }
}

export default App