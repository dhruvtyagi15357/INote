import { useContext } from "react";
import noteContext from "../context/notes/notecontext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <>
      <AddNote />

      <div className="my-4">
        <h2>Your notes</h2>
        <div className="row">
          {notes.map((note, index) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
