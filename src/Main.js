import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import Noteform from './NoteForm'

const Main = ({notes, currentNote, setCurrentNote, resetCurrentNote, saveNote}) => {
    return (
        <div className = "Main">
            <Sidebar resetCurrentNote ={resetCurrentNote}/>
            <NoteList notes = {notes} setCurrentNote = {setCurrentNote}/>
            <Noteform currentNote = {currentNote} saveNote={saveNote}/>
        </div>
    )
}

export default Main