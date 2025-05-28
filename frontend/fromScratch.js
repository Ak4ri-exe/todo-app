
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
    const task = inputBox.value; 

    // console.log(newLi.innerHTML);
    listContainer.appendChild(addLi(task));
    addLi(task)
    
}