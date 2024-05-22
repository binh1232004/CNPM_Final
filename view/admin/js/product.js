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

let ProductCategory = document.getElementById('ProductCategory');
let stdno = 1;

function getProductCategory() {
    const dbref = ref(db);
    get(child(dbref, 'Category')).then((category)=>{
        category.forEach(std => {
            AddProductCategory(std);
        });
    })
}

function AddProductCategory(std) {
    let key = std.key;
    let value = std.val();

    let opt = document.createElement('option');

    opt.value = value.CateID;
    opt.innerText = value.CateName;

    ProductCategory.append(opt);

    stdno++;
}

window.addEventListener('load', getProductCategory);

var curDate = new Date();
      
let curDay = curDate.getDate();
let curMonth = curDate.getMonth() + 1;
let curYear = curDate.getFullYear();
 
document.getElementById('current-time').innerHTML = curDay + "/" + curMonth + "/" + curYear;

console.log(document.getElementById('current-time').text);