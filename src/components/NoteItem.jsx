import React from 'react'
import "./NoteItem.css"
const NoteItem = (props) => {
  const note = props.note
  
  const handleDelete = (event) => {
    console.log(`delete handled id=${note._id}`)
  }

  const handleEdit = (event) => {
     console.log(`edit handled id=${note._id}`);
  };
  return (
    <div className="card col-md-3 mx-2 my-2">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title ">{note.title}</h5>
          <div className="">
            <i className="far fa-trash-alt mx-3" onClick={handleDelete}></i>
            <i className="fa-regular fa-pen-to-square mx-1" onClick={handleEdit}></i>
          </div>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default NoteItem