// input box for new task
const inputBox = document.getElementById(("input-box"));

// will be used to display the list of todos
const listContainer = document.getElementById("list-container");


// add task func

function addTask() {
    const task = inputBox.value.trim(); // trim() removes whitespace from both sides of a string
    console.log(task);
    if (!task) {
        alert("Nig write down a Task");
        return;
    }
    // create new li for the added task
    const li = document.createElement("li");
    //set up the HTML content of the list item
    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span> ${task} </span>
    </label>
    <span class="edit-btn"> Edit </span>
    <span class="delete-btn"> Delete </span>
    `;
    listContainer.appendChild(li);
}