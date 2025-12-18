const inputbox=document.getElementById('input_box');
const listcontainer=document.getElementById("todolist");

function addtask(){
    if(inputbox.value === ''){
        alert("you must write somethig !!!");
    }
    else{
        let l=document.createElement("li");
        l.innerHTML=inputbox.value;
        listcontainer.appendChild(l);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        l.appendChild(span);

        

    }

    inputbox.value="";
    saveData()
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();       
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }       
},false);


function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtask();




