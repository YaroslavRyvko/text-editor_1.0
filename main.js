let editBtn = document.querySelector('.edit-button')
let styleBtn = document.querySelector('.style-button')
let addBtn = document.querySelector('.add-button')
let saveBtn = document.querySelector('.save-button')
let createTable = document.querySelector('.create-table')
let createList = document.querySelector('.create-list')
let hideEdit = document.querySelector('.edit-hide')
let hidestyle = document.querySelector('.style-hide')
let textarea = document.querySelector('.textarea')
let topBox = document.querySelector('.top-box')
let bottomBox = document.querySelector('.bottom-box')
let addBox = document.querySelector('.add-box')
let backgroundColorshide = document.querySelector('.background-colors-hide')
let textColorshide = document.querySelector('.text-colors-hide')
let backgroundColors = document.querySelector('.background-colors')
let textColors = document.querySelector('.text-colors')
let tableSettings = document.querySelector('.table-settings')
let listSettings = document.querySelector('.list-settings')
let topButtons = document.querySelector('.buttons')

const F1 = document.forms.f1
const F2 = document.forms.f2

editBtn.addEventListener('click', function () {
    hideEdit.style.display = "block";
    hidestyle.style.display = "none";
    textarea.innerHTML = topBox.innerHTML;
})
addBtn.addEventListener('click', function () {
    topBox.style.display = "none";
    bottomBox.style.display = "none";
    topButtons.style.display = "none";
    addBox.style.display = "block";
})

saveBtn.addEventListener('click', function () {
    hideEdit.style.display = "none";
    topBox.innerHTML = textarea.value;
})

styleBtn.addEventListener('click', function () {
    hidestyle.style.display = "block";
    hideEdit.style.display = "none";
})

F1.addEventListener('click', function (event) {
    if (event.target.name == "font-size") {
        topBox.style.fontSize = event.target.value;
    }
    if (event.target.name == "select") {
        topBox.style.fontFamily = event.target.value;
    }
    if (event.target.name == "text-color-button") {
        textColorshide.style.display = "block";
        backgroundColorshide.style.display = "none";
    }
    if (event.target.name == "background-color-button") {
        backgroundColorshide.style.display = "block";
        textColorshide.style.display = "none";
    }
    if (F1.cursive.checked == true) {
        topBox.style.fontStyle = "italic";
    } else {
        topBox.style.fontStyle = "normal";
    }
    if (F1.bold.checked == true) {
        topBox.style.fontWeight = "bold";
    } else {
        topBox.style.fontWeight = "normal";
    }

})
backgroundColors.addEventListener('click', function (event) {
    topBox.style.backgroundColor = event.target.className;
    backgroundColorshide.style.display = "none";
})
textColors.addEventListener('click', function (event) {
    topBox.style.color = event.target.className;
    textColorshide.style.display = "none";
})


F2.addEventListener('click', function () {
    if (F2.create[0].checked == true) {
        tableSettings.style.display = "block";
        listSettings.style.display = "none";
    }
    if (F2.create[1].checked == true) {
        listSettings.style.display = "block";
        tableSettings.style.display = "none";
    }
})

textarea.addEventListener('change', function () {
    textarea.innerHTML = textarea.value;
})

createTable.addEventListener('click', function (event) {
    topBox.style.display = "block";
    bottomBox.style.display = "block";
    topButtons.style.display = "block";
    addBox.style.display = "none";
    tableSettings.style.display = "none";
    F2.create[0].checked = false;
    tableCreate()
    F2.tableConstructor[0].value = '';
    F2.tableConstructor[1].value = '';
    F2.tableConstructor[2].value = '';
    F2.tableConstructor[3].value = '';
    F2.tableBorderWith.value = '';
    F2.tableBorderType.value = F2.tableBorderType.firstElementChild.value;
    F2.tableBorderColor.value = F2.tableBorderColor.firstElementChild.value;
})

createList.addEventListener('click', function (event) {
    topBox.style.display = "block";
    bottomBox.style.display = "block";
    topButtons.style.display = "block";
    addBox.style.display = "none";
    listSettings.style.display = "none";
    F2.create[1].checked = false;
    listCreate()
    F2.liCount.value = '';
    F2.marks.value = F2.marks.firstElementChild.value;

})


function tableCreate() {
    let tbl = document.createElement("table");
    let block = document.createElement("div");
    for (let i = 0; i < F2.tableConstructor[0].value; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < F2.tableConstructor[1].value; j++) {
            let td = document.createElement("td");
            let text = document.createTextNode("TD");
            td.appendChild(text);
            td.style.width = F2.tableConstructor[2].value + 'px';
            td.style.height = F2.tableConstructor[3].value + 'px';
            td.style.borderWidth = F2.tableBorderWith.value + 'px';
            td.style.borderStyle = F2.tableBorderType.value;
            td.style.borderColor = F2.tableBorderColor.value;
            tr.appendChild(td);
        }
        tbl.appendChild(tr);
    }
    block.appendChild(tbl);
    textarea.innerHTML += block.innerHTML;
    textarea.value = textarea.textContent
}

function listCreate() {
    let ul = document.createElement('ul');
    let block = document.createElement("div");
    for (let i = 0; i < F2.liCount.value; i++) {
        let li = document.createElement('li');
        let text = document.createTextNode("item" + (i + 1));
        li.appendChild(text);
        li.style.listStyle = F2.marks.value;
        ul.appendChild(li);
    }
    block.appendChild(ul)
    textarea.innerHTML += block.innerHTML;
    textarea.value = textarea.textContent
}