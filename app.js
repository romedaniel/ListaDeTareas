let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");


function agregarTarea(){
    if(inputBox.value === ''){
        alert("¡Se debe escribir algo para agregar!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    guardardatos();
    
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        guardardatos();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        guardardatos();
    }
},false);


function guardardatos(){
    localStorage.setItem("datos",listContainer.innerHTML);
}

function mostrarDatos(){
    listContainer.innerHTML = localStorage.getItem("datos");
}


mostrarDatos();