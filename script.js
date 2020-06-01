const form = document.querySelector("form");
const searchText = document.querySelector(".search");
const ul = document.querySelector(".toDoList ul");
const listElement = document.querySelectorAll(".toDoList ul li");
const input = document.querySelector("input");
const h2Span = document.querySelector("h2 span");
const listItems = document.getElementsByClassName("task");




const removeTask = (e) => {
    e.target.parentNode.remove();
    h2Span.textContent = listItems.length;

}

const addTask = (e) => {
    e.preventDefault();
    const tastText = input.value;
    if(tastText == ""){
        alert("nie możesz dodać pustego tekstu");
    }
    else{
        if(listItems.length >= 13){
            alert("Masz za duzo na główie :) Odpocznij sobie ")
        }
        else{
            const newTask = document.createElement("li");
        newTask.className = "task";
        newTask.innerHTML = tastText + "<button> usun </button>";
        ul.appendChild(newTask);
        input.value = "";
        h2Span.textContent = listItems.length;
        newTask.querySelector('button').addEventListener("click",removeTask);
        }
        
    }
    
}



form.addEventListener("submit",addTask);
