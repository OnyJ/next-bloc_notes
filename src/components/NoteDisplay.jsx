import React from "react";

const NoteDisplay = (note) => {
  return (
    <>
      <h2>Note Display : </h2>
      <h3>{note.note.title}</h3>
      <p>{note.note.content}</p>
    </>
  );
};

export default NoteDisplay;
