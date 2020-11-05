import React from "react";
import NoteEdition from "./components/NoteEdition";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div>
      <h1>Notepad</h1>
      <NoteEdition />
      <NotesList />
    </div>
  );
}

export default App;
