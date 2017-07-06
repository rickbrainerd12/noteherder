import React from 'react'

import Note from './Note'
import './NoteList.css'

const NoteList = ({notes, setCurrentNote}) => {
    
    const noteIds = Object.keys(notes)

    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {noteIds.map(noteId => (<Note note = {notes[noteId]} 
                                          key={noteId}
                                          setCurrentNote={setCurrentNote}/>))}
          </ul>
        </div>
    )
}

export default NoteList