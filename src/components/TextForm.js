import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   setText("to update text")
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text has been converted to uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text has been converted to lowercase", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Your text has been copied", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text has been cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3">
          <label htmlFor="textBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handleOnChange}
            rows="3"
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#495057",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-3`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
          onClick={handleLowClick}
        >
          Covert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-3`}
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words and{" "}
          {text.trim().length} chartacters.
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word !== "").length}{" "}
          mintutes to read.
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter your text above to preview it here.."}
        </p>
      </div>
    </>
  );
}
