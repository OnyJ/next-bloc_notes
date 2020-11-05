import React from "react";
import { nanoid } from "nanoid";

const NotesList = () => {
  let list = [];

  for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    if (name.includes("note-")) {
      const stringItem = localStorage.getItem(name);
      const jsonItem = JSON.parse(stringItem);
      list.push(jsonItem);
    }
  }

  return (
    <>
      <h2>Your Notes</h2>
      <ul>
        {list.map((element) => {
          element.id = nanoid();
          return <li key={element.id}>{element.title}</li>;
        })}
      </ul>
    </>
  );
};

export default NotesList;
