// let openShopping = document.querySelector('.Shopping');
// let closeShopping = document.querySelector('.cloiseShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('.body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', () => {
//    body.classList.add('active');
// })
// closeShopping.addEventListener('click',()=>{
//     body.classList.remove('active');
// })
// let products =[
//     {
//         id:1,
//         name: 'PRODUCT NAME 1',
//         image:'1.PNG',
//         price:10000
//     },
//     {
//         id:2,
//         name: 'PRODUCT NAME 2',
//         image:'2.PNG',
//         price:20000
//     },
//     {
//         id:3,
//         name: 'PRODUCT NAME 3',
//         image:'3.PNG',
//         price:30000
//     },
//     {
//         id:4,
//         name: 'PRODUCT NAME 4',
//         image:'4.PNG',
//         price:40000
//     },
//     {
//         id:5,
//         name: 'PRODUCT NAME 5',
//         image:'5.PNG',
//         price:50000
//     },
//     {
//         id:6,
//         name: 'PRODUCT NAME 6',
//         image:'6.PNG',
//         price:60000
//     }
// ];
// let listCards =[];
// function initApp(){
//     products.forEach((value,key)=>{
//         let newDiv = document.createElement('div');
//         newDiv.innerHTML=`
//         <img src="image/${value.image}"/>
//         <div class="title">${value.name}</div>
//         <div class="price">${value.price.toLocaleString()}</div>
//         <button onclick="
//         `;
//         list.appendChild(newDiv);
//     })
// }

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Nike Shoe 1',
        image: '1.PNG',
        price: 3150
    },
    {
        id: 2,
        name: 'Nike Shoe 2',
        image: '2.PNG',
        price: 4850
    },
    {
        id: 3,
        name: 'Nike Shoe 3',
        image: '3.PNG',
        price: 5100
    },
    {
        id: 4,
        name: 'Nike Shoe 4',
        image: '4.PNG',
        price: 5240
    },
    {
        id: 5,
        name: 'Nike Shoe 5',
        image: '5.PNG',
        price: 5843
    },
    {
        id: 6,
        name: 'Nike Shoe 6',
        image: '6.PNG',
        price: 6350
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}