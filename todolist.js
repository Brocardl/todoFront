window.onload= function (){
    let mydata = JSON.parse(data);
    mydata.forEach(element =>{
        createTodo(element.content, element.checked)
    })
    
};

document.getElementById('buttonTodo').onclick = function(){
    let input = document.getElementById('input').value
    if (input){
        createTodo(input, false)
        
    } else {
        alert("Il faut mettre écrire une tache")
    }
};


function createTodo(content, checked){
    /*
            creating card
        */
    let todoCard = document.createElement("div");
    todoCard.className = 'card m-2'
    let todoBody = document.createElement("div");
    todoBody.className = 'card-body d-flex justify-content-between'
    todoCard.appendChild(todoBody);
    
    /*
        creating div for inputs
    */
    let buttonDiv = document.createElement("div");
    
    /*
        adding modifyInput to list
    */
    let modifyInput = document.createElement("input");
    modifyInput.type = 'text'
    modifyInput.value = content
    modifyInput.onblur = function(){
        // todo modify in json
    }
    buttonDiv.appendChild(modifyInput);
    
    /*
        adding delete button to buttonDiv
    */
    let deleteButton = document.createElement("input");
    deleteButton.type = 'button'
    deleteButton.value = 'X'
    deleteButton.className = 'btn btn-danger'
    deleteButton.onclick = function(){
        todoCard.remove()
        // todo remove in json
    }
    buttonDiv.appendChild(deleteButton);
    
    todoBody.appendChild(buttonDiv);
    
    /*
        adding checkbox to buttonDiv
    */
    let checkbox = document.createElement("input");
    thisIsChecked = checked
    checkbox.type = 'checkbox'
    checkbox.className = 'form-check-input'
    if (thisIsChecked){
        checkbox.checked = true
        todoCard.className = "card m-2 bg-info mb-3"
    }
    checkbox.onclick = function(){
        if (!thisIsChecked){
            thisIsChecked = true
            checkbox.checked = true
            todoCard.className = "card m-2 bg-info mb-3"
        } else {
            thisIsChecked = false
            checkbox.checked = false
            todoCard.className = "card m-2"
        }
        //todo change in json
    }
    todoBody.appendChild(checkbox);
    /*
        adding todos to list
    */
    let list = document.getElementById("todos");
    list.appendChild(todoCard);
}
