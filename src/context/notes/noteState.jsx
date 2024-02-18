import { useState } from "react";
import noteContext from "./notecontext";

const NoteState = (props) => {
    
    const samplenotes = [
      {
        _id: "65cf51075c69ba4ee869da64",
        user: "65c0b79062f724dd543dfbe6",
        title: "title1",
        description: "description1",
        tag: "tag1",
        date: "2024-02-16T12:11:51.747Z",
        __v: 0,
      },
      {
        _id: "65cf51385c69ba4ee869da68",
        user: "65c0b79062f724dd543dfbe6",
        title: "title3",
        description: "description3",
        tag: "tag1",
        date: "2024-02-16T12:12:40.504Z",
        __v: 0,
      },
      {
        _id: "65cf51545c69ba4ee869da6b",
        user: "65c0b79062f724dd543dfbe6",
        title: "3tt",
        description: "3dddd",
        tag: "tag1",
        date: "2024-02-16T12:13:08.968Z",
        __v: 0,
      },
      {
        _id: "65cf51075c69ba4ee869da64",
        user: "65c0b79062f724dd543dfbe6",
        title: "title1",
        description: "description1",
        tag: "tag1",
        date: "2024-02-16T12:11:51.747Z",
        __v: 0,
      },
      {
        _id: "65cf51385c69ba4ee869da68",
        user: "65c0b79062f724dd543dfbe6",
        title: "title3",
        description: "description3",
        tag: "tag1",
        date: "2024-02-16T12:12:40.504Z",
        __v: 0,
      },
      {
        _id: "65cf51545c69ba4ee869da6b",
        user: "65c0b79062f724dd543dfbe6",
        title: "3tt",
        description: "3dddd",
        tag: "tag1",
        date: "2024-02-16T12:13:08.968Z",
        __v: 0,
      }
    ];

    const [notes, setNotes] = useState(samplenotes)

    return (
        <noteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )

}


export default NoteState