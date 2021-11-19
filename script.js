var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var div = document.createElement("div");
  var li = document.createElement("li");
  var delBtn = document.createElement("button");

  div.classList.add("wrapper");
  delBtn.classList.add("del-btn");

  li.appendChild(document.createTextNode(input.value));
  delBtn.textContent = "DEL";

  div.appendChild(li);
  div.appendChild(delBtn);
  ul.appendChild(div);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function handleUlClick(e) {
  if (e.target.tagName === "LI") toggleItemAfterClick(e);
  if (e.target.className === "del-btn") deleteItemAfterClick(e);
}

function toggleItemAfterClick(e) {
  e.target.classList.toggle("done");
}

function deleteItemAfterClick(e) {
  e.target.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", handleUlClick);
