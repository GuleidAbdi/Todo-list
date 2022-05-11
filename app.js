let inputfield = document.querySelector(".input-task");
let form = document.querySelector(".form");
let searchIput = document.querySelector(".filter");
let tasks = document.querySelector(".tasks");
let removeAllBtn = document.querySelector(".clear-tasks");
let msgBox = document.querySelector(".msg");
//all eventlisteners
form.addEventListener("submit", addTask);
tasks.addEventListener("click", removeItem);
removeAllBtn.addEventListener("click", removeAll);
searchIput.addEventListener("keyup", searchTask);

function addTask(g) {
  if (inputfield.value == "") {
    alert("Empty task");
  } else {
    let li = document.createElement("li");
    li.classList = "task";
    // add taskt to new task
    li.appendChild(document.createTextNode(inputfield.value));
    //creat div
    let icons = document.createElement("div");
    icons.classList = "icons";
    // creat remove link
    let remove = document.createElement("a");
    remove.classList = "remove";
    remove.innerText = "Delete";
    // done
    let done = document.createElement("a");
    done.classList = "done";
    done.innerText = "✅";

    // append icons to the div
    icons.appendChild(remove);
    icons.appendChild(done);
    // append div li
    li.appendChild(icons);

    // append li in to ul
    tasks.appendChild(li);
    inputfield.value = "";
    msgBox.style.display = "none";
  }
  g.preventDefault();
}
function removeItem(e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("done")) {
    e.target.parentElement.parentElement.style.background = "#9dd9d2";
    e.target.parentElement.parentElement.style.color = "#fff";
  }
}
//delete all tasks
function removeAll(e) {
  if (confirm("Are you sure")) {
    while (tasks.firstChild) {
      tasks.removeChild(tasks.firstChild);
    }
  }
}
function searchTask(e) {
  let textInput = e.target.value.toLowerCase();
  document.querySelectorAll(".task").forEach(function (items) {
    let item = items.firstChild.textContent;
    if (item.toLowerCase().indexOf(textInput) != -1) {
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  });
}
