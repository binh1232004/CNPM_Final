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

let listProduct = document.getElementById('listProduct');
let stdno = 1;

function GetProduct(){
    const dbref = ref(db);

    get(child(dbref, 'Product')).then((product)=>{
        product.forEach(std => {
            AddProductAsListItem(std);
        });
    })
}

function AddProductAsListItem(std) {
    let key = std.key;
    let value = std.val();

    let id = document.createElement('th');
    let name = document.createElement('td');
    let price = document.createElement('td');
    let createDate = document.createElement('td');
    let updateDate = document.createElement('td');

    id.innerHTML = value.ProductID;
    name.innerHTML = value.Name;
    price.innerHTML = value.Price;
    createDate.innerHTML = value.CreateDate;
    updateDate.innerHTML = value.UpdateDate;

    let tr = document.createElement('tr');
    tr.className = "clickTable";
    tr.append(id, name, price, createDate, updateDate);
    let tbody = document.createElement('tbody');
    tbody.appendChild(tr);
    listProduct.append(tbody);
    stdno++;
}

window.addEventListener('load', GetProduct);


function GetClick() {
    const dbref = ref(db);

    get(child(dbref, 'Product')).then(()=>{
        var rows = document.querySelectorAll("tr.clickTable");

        rows.forEach(function(row) {
            row.addEventListener("click", function() {
                window.location.href = "./product.html";
                var table = row.closest("tbody");
                var headers = table.querySelectorAll("th");
                headers.forEach(function(header) {
                    console.log(header.textContent);
                });
            });
        });
    })
}

window.addEventListener('load', GetClick);







