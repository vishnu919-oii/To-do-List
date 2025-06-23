// Get Elements

const input = document.getElementById("taskInput");
const addBtn =  document.getElementById("addTask");
const list = document.getElementById("taskList");

// add a task functuion

addBtn.addEventListener("click",()=>{
  const inputvalue = input.value.trim();
  if (inputvalue !== "") {
     const li = document.createElement("li");
     li.textContent = inputvalue;
    
    
    // create a delbtn
    
    const delbtn = document.createElement("button");
    delbtn.style.marginLeft = "10px";
    delbtn.textContent = "❌";
    delbtn.addEventListener("click",()=> li.remove());

    // right to crtbtn

    const rigBtn = document.createElement("button");
    rigBtn.style.marginLeft ="10px";
    rigBtn.textContent = "✅";
    rigBtn.addEventListener("click", ()=>{li.style.textDecoration =  "line-through"});

    li.appendChild(delbtn);
    li.appendChild(rigBtn);
    list.appendChild(li);
    input.value = "";
    
  }
  });