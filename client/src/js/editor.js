// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from "./database";
import { header } from "./header";

export default class {
  constructor() {
    const localData = localStorage.getItem("content");

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === "undefined") {
      throw new Error("CodeMirror is not loaded");
    }

    this.editor = CodeMirror(document.querySelector("#main"), {
      value: "",
      mode: "javascript",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Sets the size of the CodeMirror editor to the height of the screen minus 50px (50px is the size of the header)
    this.editor.setSize(null, "calc(100vh - 50px)");

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info("Loaded data from IndexedDB, injecting into editor");
      this.editor.setValue(data || localData || header);
    });

    // Every time the content of the editor changes,
    // this event listener will save the contents of the editor to local storage
    this.editor.on("change", () => {
      localStorage.setItem("content", this.editor.getValue());
    });

    // Save the content of the editor when the editor loses focus
    this.editor.on("blur", () => {
      console.log("The editor has lost focus");
      putDb(localStorage.getItem("content"));
    });

    // Saves content when the page is closed
    window.addEventListener("beforeunload", function (e) {
      putDb(localStorage.getItem("content"));
    });
    // Saves content when a browser action is taken (back button and forward button)
    window.addEventListener("popstate", function (e) {
      putDb(localStorage.getItem("content"));
    });
  }
}
