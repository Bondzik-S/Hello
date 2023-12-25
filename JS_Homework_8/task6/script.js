function clearHighlights() {
  const highlighted = document.querySelector(".highlight");

  if (highlighted) {
    highlighted.classList.remove("highlight");
  }
}

function selectFirstChild() {
  clearHighlights();
  document.getElementById("list").firstElementChild.classList.add("highlight");
}

function selectLastChild() {
  clearHighlights();
  document.getElementById("list").lastElementChild.classList.add("highlight");
}

function selectNextNode() {
  const currentHighlighted = document.querySelector(".highlight");
  if (currentHighlighted && currentHighlighted.nextElementSibling) {
    clearHighlights(); // Очищає попередні підсвічування
    currentHighlighted.nextElementSibling.classList.add("highlight");
  }
}


function selectPrevNode() {
  const currentHighlighted = document.querySelector('.highlight');
  if(currentHighlighted&&currentHighlighted.previousElementSibling){
    clearHighlights();
    currentHighlighted.previousElementSibling.classList.add("highlight");
  }
}

function createNewChild() {
  clearHighlights();
  const list = document.getElementById('list');
  const newListItem = document.createElement('li');
  newListItem.textContent = "New List";
  list.appendChild(newListItem);
  newListItem.classList.add("highlight");
}

function removeLastChild() {
  const list = document.getElementById("list");
  const highlightedItem = list.querySelector(".highlight");

  if(highlightedItem){
    highlightedItem.previousElementSibling.classList.add("highlight");list.removeChild(highlightedItem);
    
  }
}
function createNewChildAtStart() {
  clearHighlights();
  const list = document.getElementById("list");
  const newListItemAtStart = document.createElement("li");
  newListItemAtStart.textContent = "New List";
  list.insertBefore(newListItemAtStart, list.firstElementChild);
  newListItemAtStart.classList.add("highlight");
}
