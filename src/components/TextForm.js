import React from "react";
// import React, { useState } from "react";   it is also correct
import { useState } from "react";

export default function TextForm(props) {
  //convert to UpperCase e.g hello -> HELLO
  const handleUpperCase = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case", "success");
  };
  //convert to lowercase e.g HELLO -> hello
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case", "success");
  };
  //convert to CaptilizeCase e.g hello world -> Hello World
  const handleCaptilizeCase = () => {
    let arrText = text.split(" ");
    for (var i = 0; i < arrText.length; i++) {
      arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1);
    }
    setText(arrText.join(" "));
    props.showAlert("Converted to Capitalize Case", "success");
  };
  //convert to AlternateCase e.g hello  -> hElLo
  const handleAlternateCase = () => {
    let arrText = text.toUpperCase().split("");
    for (var i = 0; i < arrText.length; i += 2) {
      arrText[i] = arrText[i].toLowerCase();
    }
    setText(arrText.join(""));
    props.showAlert("Converted to Alternate Case", "success");
  };
  //convert to SentenceCase e.g hello. this is world. -> Hello. This is world.
  const handleSentenceCase = () => {
    let arrText = text.toLowerCase().split(".");
    for (var i = 0; i < arrText.length; i++) {
      console.log(arrText[i]);
      arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1);
    }
    setText(arrText.join("."));
    props.showAlert("Converted to Sentence Case", "success");
  };
  //Copy the given text
  const handleCopy = () => {
    let newText = document.getElementById("textBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard", "success");
  };
  // clears all the text
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared", "danger");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("handle On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "new text"; // wrong way to set text
  //   setText("new text"); // correct way to set text
  const countWords = (str) => {
    let words;
    if (text === "") {
      words = 0;
    } else {
      words = str.trim().split(/\s+/).length;
    }
    return words;
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0d2736" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter your text here"
            id="textBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpperCase}>
          UPPER CASE
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={handleLowerCase}>
          lower Case
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={handleCaptilizeCase}>
          Captilize Case
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={handleAlternateCase}>
          aLtErNaTe cAsE
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={handleSentenceCase}>
          SentenceC case
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-danger mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Summary of your text</h2>
        <p>
          <b>words :</b> {countWords(text)} |<b> Characters :</b> {text.length}{" "}
          <br />
          <b>Approximate time to read the text : </b>
          {0.008 * text.split(" ").length} Minutes
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in above textbox to preview it here!"}
        </p>
      </div>
    </>
  );
}
