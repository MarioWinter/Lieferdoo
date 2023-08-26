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
  };