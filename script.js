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


function addToCard(menu) {
    let shoppingBasket = document.getElementById('shoppingCardContent');
    shoppingBasket.innerHTML = '';
    let j = getMenuIndex(menu);
    let index = getItemIndex(menu);


    pushBasket(j, index);

  
    for (let i = 0; i < basket[0]['item'].length; i++) {
        let item = basket[0]['item'][i];
        let menuIndex = getMenuIndex(item); 
        shoppingBasket.innerHTML += loadBasket(i, menuIndex);
    }
    
}


function removeFromCard(menu) {
    let shoppingBasket = document.getElementById('shoppingCardContent');
    shoppingBasket.innerHTML = '';
    
    let j = getMenuIndex(menu);
    let index = getItemIndex(menu);
    basketReduce(j, index);

    for (let i = 0; i < basket[0]['item'].length; i++) {
        let item = basket[0]['item'][i];
        let menuIndex = getMenuIndex(item);
        shoppingBasket.innerHTML += loadBasket(i, menuIndex);
    }

    if (basket[0]['item'].length == 0) {
        loadEmptyCard();
    }
    
}


function pushBasket(j, index) {
    let menu = food[index]['item'];
    let descrip = food[index]['itemdescription'];
    let price = food[index]['price'];

    let baskets = basket[0];
    let basketPrices = baskets['price'];
    let basketAmounts = baskets['amount'];
    let basketMenus = baskets['item'];
    let basektDescrips = baskets['itemdescription'];


    if (j == -1) {
        basketAmounts.push(1);
        basketPrices.push(price);
        basketMenus.push(menu);
        basektDescrips.push(descrip);

    }  else {
        amountIncrease(j);
        priceIncrease(j, index);
    }
}


function basketReduce(j, index) {

    let basketAmount = basket[0]['amount'][j];
    let basketPrices = basket[0]['price'];
    let basketAmounts = basket[0]['amount'];
    let basketMenus = basket[0]['item'];
    let basektDescrips = basket[0]['itemdescription'];

    if (basketAmount > 1) {
        priceReduce(j, index);
        amountReduce(j);

    }  else {
        basketAmounts.splice(j, 1);
        basketMenus.splice(j, 1);
        basektDescrips.splice(j, 1);
        basketPrices.splice(j, 1);
    }
}


function getMenuIndex(menu) {
    let index = basket[0]['item'].indexOf(menu);
    return index;
}

function getItemIndex(menu) {
    for (let i = 0; i < food.length; i++) {

        if (food[i]['item'] == menu) {
            return i;
        }  
    }

}


function priceReduce(j, index) {
    let menuPrice = food[index]['price'];
    let basketPrice = basket[0]['price'][j];

    let price = basketPrice - menuPrice;
    basket[0]['price'][j] = price;
}


function priceIncrease(j, index) {
    let menuPrice = food[index]['price'];
    let basketPrice = basket[0]['price'][j];

    let price = basketPrice + menuPrice;
    basket[0]['price'][j] = price;
}


function amountIncrease(j) {
    let basketAmount = basket[0]['amount'][j];
    basket[0]['amount'][j] = basketAmount + 1;
}


function amountReduce(j) {
    let basketAmount = basket[0]['amount'][j];
    basket[0]['amount'][j] = basketAmount - 1;

}
