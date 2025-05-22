const addBtn = document.getElementById("add-todo");
const todoItem = document.getElementById("to-do-item");

const todoList = document.getElementById("todo-list");

const deleteAllItems = document.getElementById("deleteAllItems");

const changeBg = document.getElementById("changeBg");

addBtn.addEventListener("click", () => {
  // Get input field value
  const value = todoItem.value;

  // Create li tag with value
  const li = document.createElement("li");
  li.innerText = value;

  //Add x button to remove items
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";

  // Append x button inside li tag
  li.appendChild(delBtn);

  // Add eventListener on X button to remove that li
  delBtn.addEventListener("click", () => {
    li.remove();
  });
  // Append li child on the ul
  todoList.appendChild(li);

  // clear input field
  todoItem.value = "";
});

deleteAllItems.addEventListener("click", () => {
  const listItemsArray = Array.from(document.querySelectorAll("#todo-list li"));
  //   console.log(listItemsArray);
  listItemsArray.forEach((li) => li.remove());
});

function changeBackgroundClr(color) {
  document.body.style.backgroundColor = color;
}
changeBg.addEventListener("click", () => {
  let currentClr = document.body.style.backgroundColor;
  if (!currentClr || currentClr != "black") {
    changeBackgroundClr("black");
    changeBg.innerText = "White";
    console.log(currentClr);
  } else {
    changeBackgroundClr("white");
    changeBg.innerText = "Black";
  }
});
