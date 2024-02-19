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
      {
        _id: "65cf51545c69ba4ee869d6b",
        user: "65c0b79062f724dd543dfbe6",
        title: "3tt",
        description: "3dddd",
        tag: "tag1",
        date: "2024-02-16T12:13:08.968Z",
        __v: 0,
      },
      {
        _id: "65cf575c69ba4ee869da64",
        user: "65c0b79062f724dd543dfbe6",
        title: "title1",
        description: "description1",
        tag: "tag1",
        date: "2024-02-16T12:11:51.747Z",
        __v: 0,
      },
      {
        _id: "65cf51385c6969ba4ee869da68",
        user: "65c0b79062f724dd543dfbe6",
        title: "title3",
        description: "description3",
        tag: "tag1",
        date: "2024-02-16T12:12:40.504Z",
        __v: 0,
      },
      {
        _id: "65cf51545c69ba4ee8llda6b",
        user: "65c0b79062f724dd543dfbe6",
        title: "3tt",
        description: "3dddd",
        tag: "tag1",
        date: "2024-02-16T12:13:08.968Z",
        __v: 0,
      }
    ];

    const [notes, setNotes] = useState(samplenotes)

    // add a note
    // _note: has title, desc and tag only...
    const addNote = (_note)=>{
      console.log("adding a new note: ")
      notes.push(note)
      console.log(notes)
      
    }

    //delete a note
    const deleteNote = () =>{

    }

    //edit a note
    const editNote = () => {

    }


    return (
        <noteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )

}


export default NoteState