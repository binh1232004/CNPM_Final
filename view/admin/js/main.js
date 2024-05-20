import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, update, remove } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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
// const analytics = getAnalytics(app);

const db = getDatabase();

let FnameInp = document.getElementById('FnameInp');
let LnameInp = document.getElementById('LnameInp');
let DeptInp = document.getElementById('DeptInp');
let SwimInp = document.getElementById('SwimInp');
let CnicInp = document.getElementById('CnicInp');

let AddBtn = document.getElementById('AddBtn');
let UpdBtn = document.getElementById('UpdBtn');
let DelBtn = document.getElementById('DelBtn');

function AddData(){
    set(ref(db, 'EmployeeSet/' + CnicInp.value), {
        nameofemployee: {firstname: FnameInp.value, lastname: LnameInp.value},
        department: DeptInp.value,
        canswim: (SwimInp.value == 'Yes'),
        cnic: Number(CnicInp.value)
    }).then(()=>{
        alert("Data Added Successfully");
    }).catch((error)=>{
        alert("Unsuccessful");
        console.log(error);
    })
}

function UpdateData(){
    update(ref(db, 'EmployeeSet/' + CnicInp.value), {
        nameofemployee: {firstname: FnameInp.value, lastname: LnameInp.value},
        department: DeptInp.value,
        canswim: (SwimInp.value == 'Yes'),
    }).then(()=>{
        alert("Data Updated Successfully");
    }).catch((error)=>{
        alert("Unsuccessful");
        console.log(error);
    })
}

function DeleteData(){
    remove(ref(db, 'EmployeeSet/' + CnicInp.value), {
        nameofemployee: {firstname: FnameInp.value, lastname: LnameInp.value},
        department: DeptInp.value,
        canswim: (SwimInp.value == 'Yes'),
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
