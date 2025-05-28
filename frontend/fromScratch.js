
// save input box
const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (char) {
    switch (char) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
    }
  });
}

const addLi = (task) =>
{
    let node = document.createElement('li');
    let p = document.createElement('p');
    let input = document.createElement('input');

    input.setAttribute('type','checkbox')
    node.appendChild(input)
    p.innerText = task
    node.appendChild(p)

    return node
}


function addTask(){
  // create array of tasks
    const task = inputBox.value; 
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")

    tasks.push(task);
    
    localStorage.setItem("tasks", JSON.stringify(tasks))

    listContainer.appendChild(addLi(task));
    // localStorage.setItem("task", task);
    // console.log(localStorage.getItem("task"));
    // console.log(localStorage.key(0))
    // console.log(localStorage.key(1))
    
    inputBox.value = ''
}

// to do : -> understand how things work in localstorage