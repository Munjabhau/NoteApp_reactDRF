import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'



const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        setNotes(data)
    }

    return (
        <div className='notes'>
            <div className='note-header'>
                <h2 className='note-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>

            <div className='note-list'>
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
        </div >
    )
}

export default NotesListPage
