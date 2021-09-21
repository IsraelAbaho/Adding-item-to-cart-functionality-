const allBtns = document.getElementsByTagName('button');
const mainContainer = document.getElementsByTagName('tbody')[0]
for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener('click', addToCart)
    
}

function addToCart(event){
    let btn = event.target;
    let itemName = btn.parentElement.children[1].children[0].innerText;
    let itemPrice = btn.parentElement.children[1].children[1].innerText;
    let itemImage = btn.parentElement.children[0].children[0].src


    let cartCont = document.createElement('tr')
    cartCont.innerHTML = `<td class="imgDiv"><img src="${itemImage}" alt=""></td>
    <td class="itemName">${itemName}</td>
    <td class="itemPrice">${itemPrice}</td>`

mainContainer.appendChild(cartCont)
    
    console.log(itemName)
    console.log(itemPrice)
    console.log(itemImage)
}

// Hey Mr. John i did it yes yes yes so happy i did it i can now  add items to cart. SO PROUD!