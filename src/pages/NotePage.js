import React, { useState, useEffect } from 'react'
import { json, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom';
const NotePage = () => {
  let params = useParams();
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [params.id])

  let getNote = async () => {
    let response = await fetch(`/api/note/${params.id}/`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    fetch(`/api/note/${params.id}/update/`,{
      method:"PUT",
      headers:{
        'content-Type':'application/json'
      },
      body:json.stringify(note)
    })
  }
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
