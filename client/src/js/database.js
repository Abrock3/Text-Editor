import { openDB } from "idb";

// On page load, this checks to see if the jate database already exists on your browser and if it doesn't, creates it
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// This will write the data in the content parameter to the 1 key in the jate database.
// in our case, the argument that gets passed in will be retrieved from local storage
export const putDb = async (content) => {
  console.log("PUT to the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const result = await store.put({ id: 1, value: content });
  console.log("Data saved to the database", result);
};

// This retrieves data from the 1 key of the jate database and returns it
export const getDb = async () => {
  console.log("GET from the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const result = await store.get(1);
  result
    ? console.log("Data retrieved from the database", result)
    : console.log("Data not found in the database");
  return result?.value;
};
initdb();
