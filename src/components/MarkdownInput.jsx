import React from "react";
import { useState } from "react";
import NoteDisplay from "./NoteDisplay";

const MarkdownInput = () => {
  const useInputChange = () => {
    const [input, setInput] = useState({});
    const handleInputChange = (e) =>
      setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    return [input, handleInputChange];
  };
  const [input, handleInputChange] = useInputChange();

  return (
    <>
      <NoteDisplay note={input} />
      <h2>Markdown Input : </h2>
      <form>
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
      </form>
    </>
  );
};

export default MarkdownInput;
