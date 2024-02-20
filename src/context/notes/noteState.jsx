import { useState } from "react";
import noteContext from "./notecontext";

const NoteState = (props) => {
    
    const samplenotes = [
      {
        _id: "65cf51069ba4ee869da64",
        user: "65c0b79062f724dd543dfbe6",
        title: "title1",
        description: "description1",
        tag: "tag1",
        date: "2024-02-16T12:11:51.747Z",
        __v: 0,
      },
      {
        _id: "5cf51385c69ba4ee869da68",
        user: "65c0b79062f724dd543dfbe6",
        title: "title3",
        description: "description3",
        tag: "tag1",
        date: "2024-02-16T12:12:40.504Z",
        __v: 0,
      },
      
    ];

    const [notes, setNotes] = useState(samplenotes)

    // add a note
    // _note: has title, desc and tag only...
    const addNote = (title, description, tag)=>{
      console.log("adding a new note: ")
      const _note = {
        title: title,
        description: description,
        tag: tag
      }
      setNotes(notes.concat(_note))
    }

    //delete a note
    const deleteNote = (id) =>{
      console.log("Delete context function called")
      console.log(id)
      setNotes(notes.filter((note) => {
        return note._id !== id
      }))
    }

    //edit a note
    const editNote = (id, title, description, tag) => {
      console.log("Edit context function called");
      console.log(id)

    }


    return (
        <noteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )

}


export default NoteState