// input box for new task
const inputBox = document.getElementById("input-box");

// will be used to display the list of todos
const listContainer = document.getElementById("list-container");

// add task func
function addTask() {
    const task = inputBox.value.trim(); // trim() removes whitespace from both sides of a string
    console.log(task);
    if (!task) {
        alert("Please write down a Task");
        return;
    }
    // create new li for the added task
    const li = document.createElement("li");
    // set up the HTML content of the list item
    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span> ${task} </span>
    </label>
    <span class="edit-btn"> Edit </span>
    <span class="delete-btn"> Delete </span>
    `;
    listContainer.appendChild(li); // add the newly created list item to the container specified by listContainer
    inputBox.value = "";

    // Select elements within the list item
    const checkbox = li.querySelector("input"); // select by the input HTML tag inside the li
    const editBtn = li.querySelector(".edit-btn"); // select by class
    const taskSpan = li.querySelector("span"); // select by the span HTML tag inside the li
    const deleteBtn = li.querySelector(".delete-btn"); // select by class

    // Add event listener to the checkbox
    checkbox.addEventListener("click", function (){
        li.classList.toggle("completed", checkbox.checked); // add the "completed" class to the list item li when it's checked
        // the CSS style for the class .completed is executed too when it's checked
    });

    // Add event listener to the edit button
    editBtn.addEventListener("click", function(){
        const update = prompt("Edit task:", taskSpan.textContent); // prompt() -> display a dialog box asking the user to input a new task
        if (update != null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false; // uncheck the box
        }
    });

    // Add event listener to the delete button
    deleteBtn.addEventListener("click", function(){
        listContainer.removeChild(li); // remove the list item from the container
    }); // need to add a message -> are u sure u want to delete task ?
}