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

function addToCard(index, item) {
    let shoppingBasket = document.getElementById('shoppingCardContent');
    shoppingBasket.innerHTML = '';

    shoppingBasket.innerHTML = countUp(index);
    let price = countPriceUp(index);
    
    loadBasket(index, price);


}


function countUp(i) {
        let menu = food[i];
        let menuAmount = menu['amount'];

        if (menuAmount == 0) {
            menuAmount = menuAmount++
        }        
}


function countPriceUp(i) {
    let menu = food[i];
    let menuAmount = menu['amount'];
    let menuPrice = menu['price'];

    if (menuAmount <= 1) {
        menuPrice = menuPrice * 2
    }

    return menuPrice

}