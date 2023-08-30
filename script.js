function render() {

    let menuContent = document.getElementById('menuContent');
    menuContent.innerHTML = '';

    for (let i = 0; i < food.length; i++) {

        menuContent.innerHTML += loadMenuItem(i);
    }
    loadEmptyCard();
    loadBasketCounter();
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
        shoppingBasket.innerHTML += loadBasket(i);
    }
    loadBasketCounter();
    
}


function removeFromCard(menu) {
    let shoppingBasket = document.getElementById('shoppingCardContent');
    shoppingBasket.innerHTML = '';
    
    let j = getMenuIndex(menu);
    let index = getItemIndex(menu);
    basketReduce(j, index);

    for (let i = 0; i < basket[0]['item'].length; i++) {
        shoppingBasket.innerHTML += loadBasket(i);
    }

    if (basket[0]['item'].length == 0) {
        loadEmptyCard();
    }
    loadBasketCounter();
    
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


function costsUp(menu) {
    let costs = document.getElementById('costs');
    let i = getItemIndex(menu);
    let itemPrice = food[i].price;
    let basketSum = basket[0].sum;
    
    basket[0].sum = basketSum + itemPrice;
    costs.innerHTML = ''
    costs.innerHTML = loadCosts(basket[0].sum);
}


function costsDown(menu) {
    let costs = document.getElementById('costs');
    let i = getItemIndex(menu);
    let itemPrice = food[i].price;
    let basketSum = basket[0].sum;
    

    basket[0].sum = basketSum - itemPrice;
    costs.innerHTML = ''
    if (basket[0]['item'].length == 0) {
    
    } else {
        costs.innerHTML = loadCosts(basket[0].sum);
    };
}


function basketCounter() {
    let count = 0;
    let amounts = basket[0].amount;
    if (amounts.length > -1) {
        count = amounts.reduce(function(a, b) {
            return a + b;
        },0);
    }
    return count
}


function loadBasketCounter() {
    let basketCount = document.getElementById('basketCounter');
    basketCount.innerHTML = '';
    basketCount.innerHTML = basketCounter();

}


function fixNumber(nmb) {
    let fixNmb = nmb.toFixed(2);
    fixNmb = String(fixNmb);
    newNmb = fixNmb.replace(".", ",");
    return newNmb;
}
