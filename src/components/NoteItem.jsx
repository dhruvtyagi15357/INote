import React, { useContext } from 'react'
import "./NoteItem.css"
import noteContext from '../context/notes/notecontext'


const NoteItem = (props) => {
  const context = useContext(noteContext)
  const {deleteNote, editNote} = context

  const note = props.note
  const handleDelete = (id) => {
    deleteNote(id)
    
  }

  const handleEdit = (id) => {
     editNote(id)
  };
  return (
    <div className="card col-md-3 mx-2 my-2">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title ">{note.title}</h5>
          <div className="">
            <i
              className="far fa-trash-alt mx-3"
              onClick={() => {
                handleDelete(props.k);
              }}></i>
            <i
              className="fa-regular fa-pen-to-square mx-1"
              onClick={() => {
                handleEdit(props.k);
              }}></i>
          </div>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default NoteItem