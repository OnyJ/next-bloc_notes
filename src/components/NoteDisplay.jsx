import React from "react";
import Showdown from "showdown";

const NoteDisplay = (note) => {
  const title = note.note.title;
  const content = note.note.content;
  const converter = new Showdown.Converter();
  const html = converter.makeHtml(content);

  return (
    <>
      <h2>Note Display : </h2>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

export default NoteDisplay;
