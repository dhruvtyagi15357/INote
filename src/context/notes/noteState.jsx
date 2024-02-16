import { useState } from "react";
import noteContext from "./notecontext";

const NoteState = (props) => {
    
    return (
        <noteContext.Provider value = {{}}>
            {props.children}
        </noteContext.Provider>
    )

}


export default NoteState