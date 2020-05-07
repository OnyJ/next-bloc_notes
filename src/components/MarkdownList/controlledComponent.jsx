import React from "react";
import { useInputChange } from "./useInputChange";

const ControlledComponent = (e) => {
  const [input, handleInputChange] = useInputChange();

  console.log(input);
  return (
    <form>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="markdownListTitle"
          onChange={handleInputChange}
        ></input>
        <br />
        <label>Text:</label>
        <textarea
          type="text"
          name="markdownListText"
          rows="5"
          cols="80"
          onChange={handleInputChange}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default ControlledComponent;
