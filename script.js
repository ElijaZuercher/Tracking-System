function submitForm() {

    var title = $("#title").val();
    var desc = $("#desc").val();

    if (title === '' || desc === '') {
        var samsa = document.createElement('p')
        samsa.innerText()
    } else {
        let dataList = document.getElementById("dataList");
        var listItem = document.createElement('p');
        listItem.classList.add("nichterledigt");

        listItem.innerHTML = title + ": " + desc;

        var erledigtCheckbox = document.createElement("input");
        erledigtCheckbox.type = 'checkbox';
        erledigtCheckbox.classList.add("button-erledigt");

        var deleteButton = document.createElement("img");
        deleteButton.classList.add("mülleimer")
        deleteButton.src = '/icons/red-mull.png';

        erledigtCheckbox.addEventListener("click", function () {
            if (erledigtCheckbox.checked) {
                listItem.classList.remove("nichterledigt");
                listItem.classList.add("erledigt");
            } else {
                listItem.classList.remove("erledigt");
                listItem.classList.add("nichterledigt");
            }
        });

        deleteButton.addEventListener("click", function () {
            dataList.removeChild(listItem);
        });

        listItem.appendChild(erledigtCheckbox);
        listItem.appendChild(deleteButton);
        dataList.appendChild(listItem);
    }

    document.getElementById("options").addEventListener("change", function () {
        const selectedOption = this.value;
        const taskList = document.getElementById("dataList").getElementsByTagName("p");

        for (let i = 0; i < taskList.length; i++) {
            const taskItem = taskList[i];

            if (selectedOption === "alle") {
                taskItem.style.display = "block";
            } else if (selectedOption === "nichtErledigt" && taskItem.classList.contains("nichterledigt")) {
                taskItem.style.display = "block";
            } else if (selectedOption === "erledigt" && taskItem.classList.contains("erledigt")) {
                taskItem.style.display = "block";
            } else {
                taskItem.style.display = "none";
            }
        }
    });
}