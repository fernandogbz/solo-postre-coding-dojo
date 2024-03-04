// Remove Join Button
// Remove Btn 1 way
const removeBtn = () => {
  const joinBtn = document.getElementById("joinBtn"); // Getting join button from dom
  joinBtn.remove(); // Removing join button, the remove() method removes an element (or node) from the document.
};

// Remove btn 2 way
// document.addEventListener("click", (e) => { // Listening for a click event
//   e.preventDefault(); // Preventing default event
//   joinBtn.remove(); // Removing join button
// });

// Remove btn 3 way
// const removeBtn = () => {
//   const joinBtn = (document.getElementById("joinBtn").style.display = "none"); // Getting joinBtn and setting it's display to none to hide it. Personally I don't like this one that much
// };

// When user clicks search alert a message showing the value in the text input
const inputAlert = () => {
  const searchInput = document.getElementById("searchInput").value; // Getting search input value
  alert(`You are searching for ${searchInput}`); // Alert the search input value, using template strings backticks are used to be able to write multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
};

let goBtn = document.getElementById("goBtn"); // Getting go button from the dom
goBtn.addEventListener("click", inputAlert); //Listening for a click event, if it ocurrs calls inputAlert function

// Likes
let likeSpan = document.getElementsByClassName("likesCount");

// Add 1 to like counter
const like = (i) => {
  likeSpan[i].innerHTML = Number(likeSpan[i].innerHTML) + 1; // innerHTML is used to get the internal HTML content of any element as a string and also to set or change elements in the dom.
  console.log(likeSpan.typeOf);
  console.log(likeSpan);
};
