import { useContext } from "react";
import noteContext from "../context/notes/notecontext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
      <div className="my-4">
        <h2>Your notes</h2>
        <div className="row">
          {notes.map((note, index) => {
            return <NoteItem key={index} note={note} />;
          })}
        </div>
      </div>
  );
};

export default Notes;
