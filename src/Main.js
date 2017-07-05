import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import Noteform from './NoteForm'

const Main = () => {
    return (
        <div className = "Main">
            <Sidebar />
            <NoteList />
            <Noteform />
        </div>
    )
}

export default Main