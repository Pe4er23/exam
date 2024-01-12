document.getElementById('submit').addEventListener("click", function(event){
    event.preventDefault();
    let fullName = document.getElementById('fullName').value;
    let year = document.querySelector('input[name="yearEducation"]:checked').value;
    let isGoodStud = document.getElementById('aboutEducation').value;
    let res = fullName + " навчається на " + year + "-му курсі та ";
    let phoneNumber = document.getElementById('phoneNumber').value;

    if (isGoodStud){
        res += "добре вчиться.";
    }else {
        res += "не добре вчиться.";
    }

    let table = document.getElementById("Table");
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = fullName;
    cell2.innerHTML = year;
    cell3.innerHTML = isGoodStud ? "Так" : "Ні";
    cell4.innerHTML = phoneNumber;

    let listItem = document.createElement("li");

    listItem.textContent = `${fullName} навчається на ${year}-му курсі та ${isGoodStud ? 'добре вчиться.' : 'не добре вчиться.'}`;
    document.getElementById("resultList").appendChild(listItem);

    // новый элемент
    document.getElementById("result").appendChild(listItem);

    // пустые формы
    document.getElementById('fullName').value = "";
    document.querySelector('input[name="yearEducation"]:checked').checked = false;
    document.getElementById('aboutEducation').checked = false;
    document.getElementById('phoneNumber').value = "";
})