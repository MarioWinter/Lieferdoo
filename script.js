function render() {

    let menuContent = document.getElementById('menuContent');
    menuContent.innerHTML = '';

    for (let i = 0; i < food.length; i++) {

        menuContent.innerHTML += loadMenuItem(i);
    }
    loadEmptyCard();
    // closeCart();
    // loadModal();
    // hideModal();
    // templateSumMobile();
}

function addToCard(index) {
    let shoppingBasket = document.getElementById('shoppingCardContent');
    let menu = food[index]['item'];
    let j = getMenuIndex(menu);
    pushBasket(j, index);
    shoppingBasket.innerHTML = '';
    for (let i = 0; i < basket[0]['item'].length; i++) {
        
        shoppingBasket.innerHTML += loadBasket(i, index);
    }
    
}


function pushBasket(j, index) {
    let menu = food[index]['item'];
    let price = food[index]['price'];
    let descrip = food[index]['itemdescription'];

    let baskets = basket[0];
    let basketAmounts = baskets['amount'];
    let basketPrices = baskets['price'];
    let basketMenus = baskets['item'];
    let basektDescrips = baskets['itemdescription'];


    if (j == -1) {
        basketAmounts.push(1);
        basketPrices.push(price);
        basketMenus.push(menu);
        basektDescrips.push(descrip);

    }  else {
        let basketAmount = baskets['amount'][j];
        let basketPrice = baskets['price'][j];
        baskets['amount'][j] = basketAmount + 1;
        baskets['price'][j] = basketPrice + price;
    }
}


function getMenuIndex(menu) {
    let index = basket[0]['item'].indexOf(menu);
    return index;
}

//funtion geht nocht nicht 27.08.2023 12:08
function priceReduce(j, menu) {
    let newPrice = basket - menu;
    return newPrice
}
//

function priceIncrease(basket, menu) {
    let newPrice = basket + menu;
    return newPrice
}


function amountIncrease(j) {
    let basketAmount = baskets['amount'][j];
    baskets['amount'][j] = basketAmount + 1;
}


function amountReduce(j) {
    let basketAmount = baskets['amount'][j];
    baskets['amount'][j] = basketAmount - 1;

}


function basketIncrease(basketMenu, foodMenu) {
    let baskets = basket[0];
    let foods = food[index];

    let basketAmount = baskets['amount'][i];
    let basketAmounts = baskets['amount'];

    let basketMenu = baskets['item'][i];

    let menuPrice = foods['price'];
    let basketPrice = baskets['price'][i];
    
    let basektDescrip = baskets['itemdescription'][i];
}


function basketReduce(i, index) {
    let baskets = basket[0];
    let foods = food[index];

    let basketAmount = baskets['amount'][i];
    let basketAmounts = baskets['amount'];

    let basketMenu = baskets['item'][i];

    let menuPrice = foods['price'];
    let basketPrice = baskets['price'][i];
    
    let basektDescrip = baskets['itemdescription'][i];

    if (basketAmount > 1) {
        

        let price = priceReduce(basketPrice, menuPrice);
        baskets['price'][i] = price;

    }  else {
        basketAmounts.splice(i,1);

    }

}




// function getContentIndex(menu) {
//     let foods = food[i];
//     for (let i = 0; i < foods.length; i++) {
//         let index = foods['item'].indexOf(menu);
//         return index        
//     }
// }