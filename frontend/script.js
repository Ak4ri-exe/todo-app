// input box for new task
const inputBox = document.getElementById("input-box");

// will be used to display the list of todos
const listContainer = document.getElementById("list-container");

// will be used for notification display
const notification = document.getElementById("notification");

// notification display function
function displayNotification(message, messageType) {
    notification.textContent = message;
    notification.classList.remove("hidden");
    notification.classList.add("show");

    // handle error for message type
    notification.classList.add(messageType);
    // hide notification after 3s
    setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("hidden");
    }, 2000);
}

// add task func
function addTask() {
    const task = inputBox.value.trim(); // trim() removes whitespace from both sides of a string
    console.log(task);
    if (!task) {
        displayNotification("Please write down a Task ☺", "success");
        return;
    }
    // create new li for the added task
    const li = document.createElement("li");
    // set up the HTML content of the list item
    li.innerHTML = `
    <div class="little-container">
        <label>
            <input class="input-checkbox" type="checkbox">
        </label>
        <span class="task-text">${task}</span>
    </div>
    <span class="icon-container">
        <i class="fas fa-edit edit-icon"></i>
        <i class="fas fa-trash delete-icon"></i>
    </span>
    `;
    listContainer.appendChild(li); // add the newly created list item to the container specified by listContainer
    inputBox.value = "";

    // Select elements within the list item
    const checkbox = li.querySelector("label input"); // select by the input HTML tag inside the li
    const div = li.querySelector(".little-container");
    const editBtn = li.querySelector(".edit-icon"); // select by class
    const taskSpan = li.querySelector("span"); // select by the span HTML tag inside the li
    const deleteBtn = li.querySelector(".delete-icon"); // select by class
    const label = li.querySelector("label");
    

    
    // Add event listener to the checkbox
    checkbox.addEventListener("click", function (){
        console.log("called here for checkbox!");
        div.classList.toggle("completed", checkbox.checked); // add the "completed" class to the list item li when it's checked
        // the CSS style for the class .completed is executed too when it's checked
    });

    // Add event listener to the checkbox
checkbox.addEventListener("click", function (event) {
    console.log("Checkbox clicked!");
    event.stopPropagation(); // Prevent the click event from propagating to the <li>
    div.classList.toggle("completed", checkbox.checked); // Add or remove the "completed" class
});

// Add event listener to the <li>
li.addEventListener("click", function () {
    // Remove the "completed" class if it exists
    if (div.classList.contains("completed")) {
        div.classList.remove("completed");
        checkbox.checked = false; // Uncheck the checkbox
        return;
    }

    // Logic for editing the task
    const littleContainer = taskSpan.parentNode; // Get the parent <div class="little-container">
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskSpan.textContent.trim(); // Trim any extra whitespace
    input.className = "edit-input";

    let isReplaced = false; // Flag to prevent multiple replacements

    // Replace the task text with the input field
    littleContainer.replaceChild(input, taskSpan);
    input.focus();

    function replaceInputWithSpan() {
        if (isReplaced) return; // Prevent multiple replacements
        isReplaced = true;

        const updatedText = input.value.trim() || taskSpan.textContent.trim(); // Trim the input value
        taskSpan.textContent = updatedText;
        littleContainer.replaceChild(taskSpan, input);
    }

    // Save the new text when the user presses Enter or loses focus
    input.addEventListener("blur", replaceInputWithSpan);
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            replaceInputWithSpan();
        }
    });
});

    // Add event listener to the edit icon
    // editBtn.addEventListener("click", function(){
    //     const update = prompt("Edit task:", taskSpan.textContent); // prompt() -> display a dialog box asking the user to input a new task
    //     if (update != null) {
    //         taskSpan.textContent = update;
    //         li.classList.remove("completed");
    //         checkbox.checked = false; // uncheck the box
    //     }
    // });

    // Add event listener to the delete icon
    deleteBtn.addEventListener("click", function(){
        var confirmDelete = confirm("Are u sure you want to delete this Task?"); // returns true if the user click on ok
        if (confirmDelete)
            li.remove();  // remove the list item from the container
            // listContainer.removeChild(li); // u can do it this way too
    });
}

// need to handle if the list item text is too long

inputBox.addEventListener("keydown", function (event){

    if (event.key == "Enter") {
        addTask();
    }
});


// edit task by double clicking or clicking !!
// cancel marking the text with line when clicked on 