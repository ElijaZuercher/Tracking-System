function submitForm() {
    
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var dataList = document.getElementById("dataList");

    var listItem = document.createElement("li");
    listItem.classList.add("nichterledigt");
    
    listItem.innerHTML = "Titel: " + title + "<br> Beschreibung: " + desc;
    
    var erledigtCheckbox = document.createElement("input");
    erledigtCheckbox.type = 'checkbox';
    erledigtCheckbox.classList.add("button-erledigt");

    var deleteButton = document.createElement("img");
    deleteButton.classList.add("mülleimer")
    deleteButton.src = '/icons/red-mull.png';
    
    erledigtCheckbox.addEventListener("click", function() {
        if(erledigtCheckbox.checked){
        
        listItem.classList.remove("nichterledigt");
        listItem.classList.add("erledigt");
        listItem.classList.add("strikethrough");
        }
        else{
            listItem.classList.remove("strikethrough");
            listItem.classList.remove("erledigt");
            listItem.classList.add("nichterledigt");
        }
    });
    
    deleteButton.addEventListener("click", function() {
        dataList.removeChild(listItem);
    });
    
    listItem.appendChild(erledigtCheckbox);
    listItem.appendChild(deleteButton);
    dataList.appendChild(listItem);

        
}