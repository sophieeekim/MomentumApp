//todo.js

const toDoForm = document.querySelector(".js-toDoForm");  
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = []; // array for to do list things 

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    } );
    //run the function for each element in array and return elements (makes new array) only that are true
    toDos = cleanToDos;
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    // Use JSON.stringify to change object to string. 
    // In local storage, you can save only string! Not JavaScript data.
}

function paintToDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const newId = toDos.length + 1;
   delBtn.innerText = "❌";
   delBtn.addEventListener("click",deleteToDo);
   span.innerText = text;
   li.appendChild(delBtn);
   li.appendChild(span);
   li.id = newId; 
   toDoList.appendChild(li);
   const toDoObj = {
       text: text,
       id: newId
   };
   toDos.push(toDoObj);
   saveToDos(); 
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach( function(toDo) {
            paintToDo(toDo.text); 
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();