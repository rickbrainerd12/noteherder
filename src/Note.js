import React from 'react'

const Note = (props) => {

    const handleClick = () => {
        props.note.title
        props.note.body
    }

    return (
        <a className="active" onClick = {handleClick}>
            <li>
                <div className="note">
                    <div className="note-title">{props.note.title}</div>
                    <div className="note-body">
                        <p>{props.note.body}</p>
                    </div>
                </div>
            </li>
        </a>
    )
}

export default Note