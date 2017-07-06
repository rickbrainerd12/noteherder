import React from 'react'
import NoteForm from './NoteForm'

const Note = ({note}) => {

    const handleClick =  () =>  {
       setCurrentNote(note)
    }

    return (
        <a className="active" onClick = {handleClick}>
            <li>
                <div className="note">
                    <div className="note-title">{note.title}</div>
                    <div className="note-body">
                        <p>{note.body}</p>
                    </div>
                </div>
            </li>
        </a>
    )
}

export default Note