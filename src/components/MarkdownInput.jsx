import React from "react";
import { useState } from "react";

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
      <h2>Markdown Input : </h2>
      <form>
        <h3>{input.title && "Title : " + input.title}</h3>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
          />
        </div>

        <h4>{input.text && "Text : " + input.text}</h4>
        <div>
          <input
            type="text"
            name="text"
            placeholder="Text..."
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
  );
};

export default MarkdownInput;
