const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Insert task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Handle adding tasks with the Enter key
inputBox.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {  // Check if the "Enter" key is pressed
        addTask();
    }
});

// Working checked and delete
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show the saved tasks after reloading the page
function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();
