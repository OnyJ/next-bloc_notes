import React from "react";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";

function App() {
  return (
    <div>
      <h1>Notepad</h1>
      <NoteDisplay />
      <MarkdownInput />
    </div>
  );
}

export default App;
