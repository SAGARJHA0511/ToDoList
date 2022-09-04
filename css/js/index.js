function addtaskfunction(){
    var tasktexted = document.getElementById("texttask").value;
    var table = document.getElementById("todo");
    var row1 =document.createElement("tr");
    const col1 =document.createElement("td");
    const col2 =document.createElement("td");
    const col3 =document.createElement("td");
    document.getElementById("texttask").value="";
    col1.classList.add('strikeThroughEmpty');
    col1.innerHTML = tasktexted;
    col2.innerHTML  = '<input type="submit" value=Done Task">'
    var removeButton = document.createElement("input");
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('value','Remove Task');
    removeButton.setAttribute('onclick','removeRow(tish)');
    col3.appendChild(removeButton);

    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);
    table.appendChild(row1);


    col2.addEventListener('click',()=>{
        col1.classList.toggle('strikeThroughDone');
    })


    
}
function removeRow(oButton){
    var empTab = document.getElementById('todo');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);

    
}