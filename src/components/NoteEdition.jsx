import React from "react";
import { useState } from "react";
import NoteDisplay from "./NoteDisplay";

export default function NoteEdition() {
  const useInputChange = () => {
    const [input, setInput] = useState({});
    const handleInputChange = (e) =>
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    return [input, handleInputChange];
  };

  const saveNote = (e) => {
    e.preventDefault();
    localStorage.setItem("note-" + input.title, JSON.stringify(input));
  };

  const deleteNote = () => {
    localStorage.removeItem("note-" + input.title);
  };

  const deleteAllNotes = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const itemName = localStorage.key(i);
      if (itemName.includes("note-")) {
        localStorage.removeItem(itemName);
        i--;
      }
    }
  };

  const [input, handleInputChange] = useInputChange();

  return (
    <>
      <NoteDisplay note={input} />
      <h2>Markdown Input : </h2>
      <form onSubmit={saveNote}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <textarea
            name="content"
            placeholder="Text..."
            rows="4"
            cols=""
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
      <button onClick={deleteNote}>delete</button>
      <br />
      <button onClick={deleteAllNotes}>delete my notes</button>
    </>
  );
};

// export default NoteEdition;
