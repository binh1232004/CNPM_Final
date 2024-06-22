// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// import "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDDOUEj5ZXHt_TvN10dbyj5Yg3xX1T5fus",
//     authDomain: "demosoftwaretechnology.firebaseapp.com",
//     databaseURL: "https://demosoftwaretechnology-default-rtdb.firebaseio.com",
//     projectId: "demosoftwaretechnology",
//     storageBucket: "demosoftwaretechnology.appspot.com",
//     messagingSenderId: "375046175781",
//     appId: "1:375046175781:web:0d1bfac1b8ca71234293cc",
//     measurementId: "G-120GXQ1F6L"
// };

// const app = initializeApp(firebaseConfig);

// import { getDatabase, ref, get, set, runTransaction, child, update, remove } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// const db = getDatabase();



// //
// let listProductHTML = document.getElementById('listProduct');

// function RetData(){
    
//     const dbref = ref(db);
//     get(child(dbref, 'Product')).then(function(snapshot) {
//         snapshot.forEach(function(childSnapshot) {
//             var value = childSnapshot.val();
//             // console.log(value);
//             let newProduct = document.createElement('div');
//             newProduct.classList.add('item');
//             newProduct.dataset.id = value.ProductID;

//              let imagesHtml = '';
//             if (value.Images) {
//                 const firstImageKey = Object.keys(value.Images)[0];
//                 if (firstImageKey) {
//                     let imgURL = value.Images[firstImageKey].ImgURL.replace(/</g, "&lt;").replace(/>/g, "&gt;");
//                     imagesHtml = `<img class="card-img-top" src="${imgURL}" alt="${value.Name}">`;
//                 }
//             }
            

//             newProduct.innerHTML =  `
//                 <a href="detail.html?id=${value.ProductID}">
//                     ${imagesHtml}
//                 </a>
//                 <h2>${value.Name}</h2>
//                 <div class="price">${value.Price}đ</div>
//                 <button class="addCart">
//                     Thêm vào giỏ hàng
//                 </button>
                
//             `;
//             //console.log(value.Caterogy);
//             listProductHTML.appendChild(newProduct);
//         });
//     })
//     .catch((error)=>{
//         alert("Unsuccessful");
//         console.log(error);
//     });
// }

// RetData();


// //

// let iconCart = document.querySelector('.icon-cart');
// let closeBtn = document.querySelector('.cartTab .close');
// let body = document.querySelector('body');
// let listCartHTML = document.querySelector('.listCart');
// let iconCartSpan = document.querySelector('.icon-cart span');
// let listProduct = document.querySelector('.listProduct');

// let listProducts = [];
// let carts = [];


// iconCart.addEventListener('click', ()=> {
//     body.classList.toggle('showCart');
// })

// closeBtn.addEventListener('click', () => {
//     body.classList.toggle('showCart')
// })



// listProduct.addEventListener('click',(event) => {
//     let positionClick = event.target;
//     if(positionClick.classList.contains('addCart')){
//         let product_id = positionClick.parentElement.dataset.id;
        
//         addToCart(product_id);
//     }
// }) 


// const addToCart = (product_id) => {
//     // lấy dữ liệu productID từ database
//     let positionThisProductInCart = carts.findIndex((value)=> value.ProductID == product_id);
     
//     if(carts.length <= 0 ){
//         carts = [ {
//             ProductID : product_id,
//             quantity: 1
//         }]
//     }else if (positionThisProductInCart < 0){
//         carts.push({
//             ProductID : product_id,
//             quantity : 1
//         })
//     }else {
//         carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
//     }
//     addCartToHTML();
//     addCartToMemory();
// }

// const addCartToMemory = () => {
//     localStorage.setItem('cart', JSON.stringify(carts));
// }

// const addCartToHTML = () => { 

//     listCartHTML.innerHTML = '';
//     let totalQuantity = 0;

//     if (carts.length > 0){
//         carts.forEach(cart => {
//             totalQuantity = totalQuantity + cart.quantity;
//             let newCart = document.createElement('div');
//             newCart.classList.add('item');
//             newCart.dataset.id = cart.product_id;
//             // gan listProducts = [lay tu firebase];
//             let positionProduct = listProducts.findIndex ((value) => value.id == cart.product_id);
//             let info = listProducts[positionProduct];
//             newCart.innerHTML = `
//                 <div class="image">
//                     <img src="images/ao/3.jpg" alt="">
//                 </div>
//                 <div class="name">
//                     Name
//                 </div>
//                 <div class="totalPrice">
//                     200000đ
//                 </div>
//                 <div class="quantity">
//                     <span class="minus"><</span>
//                     <span>1</span>
//                     <span class="plus">></span>
//                 </div>
//             `;
//             listCartHTML.appendChild(newCart);
//         })
//     }
//     iconCartSpan.innerText = totalQuantity;
// }

// listCartHTML.addEventListener('click',(event) => {
//     let positionClick = event.target;
//     if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
//         let product_id = positionClick.parentElement.dataset.id;
//         let type = 'minus';
//         if(positionClick.classList.contains('plus')){
//             type = 'plus';
//         }
//         changeQuantity(product_id,type);
//     }
// })

// const changeQuantity = (product_id,type) => {
//     let positionItemInCart = carts.findIndex((value) => value.ProductID == product_id);
//     if(positionItemInCart >= 0){
//         switch(type){
//             case 'plus':
//                 carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
//                 break;
//             default:
//                 let valueChange = carts[positionItemInCart].quantity - 1;
//                 if (valueChange > 0 ){
//                     carts[positionItemInCart].quantity = valueChange;
//                 }else {
//                     carts.splice(positionItemInCart, 1);
//                 }
//                 break;
//         }
//         addCartToMemory();
//         addCartToHTML();
//     }
// }







// const addDataToHTML = () => {
//     listProductHTML.innerHTML = '';
//     if (listProducts.length > 0 ){
//         listProducts.forEach(product => {
//             let newProduct = document.createElement('div');
//             newProduct.classList.add('item');
//             newProduct.innerHTML = `

//             `;
//             listProductHTML.appendChild (newProduct);
//         })
//     }
// }


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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
const db = getDatabase();

let listProductHTML = document.getElementById('listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
let iconCart = document.querySelector('.icon-cart');
let closeBtn = document.querySelector('.cartTab .close');
let body = document.querySelector('body');

let listProducts = [];
let carts = JSON.parse(localStorage.getItem('cart')) || [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeBtn.addEventListener('click', () => {
    body.classList.remove('showCart');
});

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
});

const RetData = () => {
    const dbref = ref(db);
    get(child(dbref, 'Product')).then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var value = childSnapshot.val();
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = value.ProductID;

            let imagesHtml = '';
            if (value.Images) {
                const firstImageKey = Object.keys(value.Images)[0];
                if (firstImageKey) {
                    let imgURL = value.Images[firstImageKey].ImgURL.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    imagesHtml = `<img class="card-img-top" src="${imgURL}" alt="${value.Name}">`;
                }
            }

            newProduct.innerHTML = `
                <a href="detail.html?id=${value.ProductID}">
                    ${imagesHtml}
                </a>
                <h2>${value.Name}</h2>
                <div class="price">${value.Price}đ</div>
                <button class="addCart">Thêm vào giỏ hàng</button>
            `;
            listProducts.push(value);
            listProductHTML.appendChild(newProduct);
        });
        addCartToHTML(); // Update cart HTML on initial load
    }).catch((error) => {
        alert("Unsuccessful");
        console.log(error);
    });
};

const addToCart = (product_id) => {
    let product = listProducts.find(p => p.ProductID == product_id);
    if (!product) return;

    let positionThisProductInCart = carts.findIndex(cartItem => cartItem.ProductID == product_id);

    if (carts.length <= 0 || positionThisProductInCart < 0) {
        carts.push({ ProductID: product_id, quantity: 1 });
    } else {
        carts[positionThisProductInCart].quantity += 1;
    }

    addCartToMemory();
    addCartToHTML();
};

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;

    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuantity += cart.quantity;
            let product = listProducts.find(p => p.ProductID == cart.ProductID);
            if (!product) return;

            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.ProductID;

            newCart.innerHTML = `
                <div class="image">
                    <img src="${product.Images ? product.Images[Object.keys(product.Images)[0]].ImgURL : ''}" alt="${product.Name}">
                </div>
                <div class="name">${product.Name}</div>
                <div class="totalPrice">${product.Price * cart.quantity}đ</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCartHTML.appendChild(newCart);
        });
    }
    iconCartSpan.innerText = totalQuantity;
};

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantity(product_id, type);
    }
});

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex(cartItem => cartItem.ProductID == product_id);
    if (positionItemInCart >= 0) {
        if (type === 'plus') {
            carts[positionItemInCart].quantity += 1;
        } else {
            let newQuantity = carts[positionItemInCart].quantity - 1;
            if (newQuantity > 0) {
                carts[positionItemInCart].quantity = newQuantity;
            } else {
                carts.splice(positionItemInCart, 1);
            }
        }
        addCartToMemory();
        addCartToHTML();
    }
};

RetData();

document.addEventListener('DOMContentLoaded',function(){
    let buttons = document.querySelectorAll('.checkOut');
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            window.location.href = 'pageCart.html';
        }
    )
    })
})