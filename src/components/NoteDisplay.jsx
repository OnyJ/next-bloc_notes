import React from "react";
import Showdown from "showdown";

const NoteDisplay = (note) => {
  const converter = new Showdown.Converter();
  const title = note.note.title;
  let content = note.note.content;

  content = converter.makeHtml(content);

  return (
    <>
      <h2>Note Display : </h2>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default NoteDisplay;
