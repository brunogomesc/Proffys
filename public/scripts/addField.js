//search the button
document.querySelector("#add-time").addEventListener("click", cloneField);

//execute action
function cloneField(){
    //duplicando the fields
    const newContainer = document.querySelector(".schedule-item").cloneNode(true);

    //clear the field
    const newField = newContainer.querySelectorAll("input");

    newField.forEach(function(fieldCurrent) {
        fieldCurrent.value = "";
    });

    //insert in the page
    document.querySelector("#schedule-itens").appendChild(newContainer);
}