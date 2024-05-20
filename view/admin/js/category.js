import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDDOUEj5ZXHt_TvN10dbyj5Yg3xX1T5fus",
    authDomain: "demosoftwaretechnology.firebaseapp.com",
    databaseURL: "https://demosoftwaretechnology-default-rtdb.firebaseio.com",
    projectId: "demosoftwaretechnology",
    storageBucket: "demosoftwaretechnology.appspot.com",
    messagingSenderId: "375046175781",
    appId: "1:375046175781:web:0d1bfac1b8ca71234293cc",
    measurementId: "G-120GXQ1F6L"
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const db = getDatabase();

let CateId = document.getElementById('CateIdInp');
let CateName = document.getElementById('CateNameInp');

let AddBtn = document.getElementById('AddBtn');
let UpdBtn = document.getElementById('UpdateBtn');
let DelBtn = document.getElementById('DeleteBtn');

function AddData(){
    set(ref(db, 'Category/' + CateId.value), {
        CateName: CateName.value,
        CateID: CateId.value
    }).then(()=>{
        alert("Data Added Successfully");
    }).catch((error)=>{
        alert("Unsuccessful");
        console.log(error);
    })
}

function UpdateData(){
    update(ref(db, 'Category/' + CateId.value), {
        CateName: CateName.value
    }).then(()=>{
        alert("Data Updated Successfully");
    }).catch((error)=>{
        alert("Unsuccessful");
        console.log(error);
    })
}

function DeleteData(){
    remove(ref(db, 'Category/' + CateId.value), {
        CateName: CateName.value
    }).then(()=>{
        alert("Data Deleted Successfully");
    }).catch((error)=>{
        alert("Unsuccessful");
        console.log(error);
    })
}

AddBtn.addEventListener('click', AddData);
UpdBtn.addEventListener('click', UpdateData);
DelBtn.addEventListener('click', DeleteData);

let cateList = document.getElementById('categoryList');
let stdno = 1;

function GetCategory(){
    const dbref = ref(db);

    get(child(dbref, 'Category')).then((category)=>{
        category.forEach(std => {
            AddCategorytAsListItem(std);
        });
    })
}

function AddCategorytAsListItem(std) {
    let key = std.key;
    let value = std.val();

    let id = document.createElement('th');
    let name = document.createElement('td');

    id.innerHTML = value.CateID;
    name.innerHTML = value.CateName;

    let tr = document.createElement('tr');
    tr.append(id, name);
    let tbody = document.createElement('tbody');
    tbody.appendChild(tr);
    cateList.append(tbody);
    stdno++;
}

window.addEventListener('load', GetCategory);

// let StudentDiv = document.getElementById('StudentDiv');
// let stdno = 1;

// function GetStudents(){
//     const dbref = ref(db);

//     get(child(dbref, 'Category')).then((students)=>{
//         students.forEach(std => {
//             AddStudentAsListItem(std);
//         });
//     })
// }

// function AddStudentAsListItem(std) {
//     let key = std.key;
//     let value = std.val();

//     let name = document.createElement('li');
//     let id = document.createElement('li');
//     let heading = document.createElement('h3');

//     name.innerHTML = "Name: " + value.CateName;
//     id.innerHTML = "ID: " + value.CateID;
//     heading.innerHTML = "Category #" + stdno;

//     let ul = document.createElement('ul');
//     ul.append(heading, id, name);
//     StudentDiv.append(ul);
//     stdno++;
// }

// window.addEventListener('load', GetStudents);

