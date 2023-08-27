function loadMenuItem(i) {
    let menu = food[i];
    return `
        <div class="menu" id="menu-content${i}">
            <div class="menu-header">

                <h3>${menu['item']}</h3>
                <div class="add-button" onclick="addToCard(${i})">
                    <svg viewBox="0 0 16 16" width="24px" height="24px" role="presentation" focusable="false" aria-hidden="true"><path d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344z"></path></svg>
                </div>
                
            </div>
            <div class="menu-description">${menu['itemdescription']}</div>
            <h3 class="menu-price">${menu['price']} €</h3>
        </div>

    `;
}


function loadEmptyCard() {
    let emptyCard = document.getElementById('shoppingCardContent');
    emptyCard.innerHTML = '';
    emptyCard.innerHTML = `

        <svg viewBox="0 0 2001 2001" fill="rgb(0, 0, 0)" width="32px" height="32px" role="presentation" focusable="false" aria-hidden="true">
            <path d="M544.779,561.667c-54.173,0 -99.353,40.607 -105.112,94.46l-122.17,1143.69c-3.183,29.77 6.47,59.622 26.484,81.914c20.025,22.25 48.673,35.044 78.618,35.044l1155.81,-0c29.934,-0 58.602,-12.794 78.617,-35.044c20.015,-22.292 29.667,-52.144 26.474,-81.914l-122.15,-1143.69c-5.779,-53.853 -50.948,-94.46 -105.111,-94.46l-911.463,0Zm1033.63,1405.35l-1155.81,-0c-44.181,-0 -86.457,-18.831 -115.99,-51.691c-29.533,-32.86 -43.779,-76.897 -39.082,-120.83l122.17,-1143.69c8.488,-79.483 75.156,-139.393 155.082,-139.393l911.463,-0c79.925,-0 146.593,59.91 155.061,139.393l122.17,1143.69c4.697,43.933 -9.549,87.97 -39.082,120.83c-29.533,32.86 -71.809,51.691 -115.979,51.691" style="fill-rule:nonzero;stroke:#000;stroke-width:55px;"/>
            <path d="M1300.18,829.905c-0.453,0 -0.876,-0.02 -1.319,-0.051c-13.844,-0.711 -24.496,-12.526 -23.785,-26.371c0.237,-4.852 23.023,-486.722 -141.556,-659.995c-37.877,-39.875 -81.625,-59.262 -133.728,-59.262c-52.112,0 -95.799,19.387 -133.573,59.231c-164.198,173.232 -140.392,655.102 -140.134,659.954c0.741,13.845 -9.889,25.68 -23.744,26.422c-13.814,0.762 -25.691,-9.889 -26.433,-23.733c-0.278,-5.151 -6.603,-127.475 8.458,-274.471c20.529,-200.385 69.439,-342.6 145.347,-422.691c47.127,-49.733 104.338,-74.95 170.079,-74.95c65.71,0 122.963,25.217 170.193,74.919c76.053,80.122 125.261,222.337 146.223,422.702c15.38,146.985 9.312,269.319 9.044,274.46c-0.679,13.422 -11.784,23.836 -25.072,23.836" style="fill-rule:nonzero;stroke:#000;stroke-width:55px;"/>   
        </svg>
        <h2 class="empty-card">Fülle deinen Warenkorb</h2>
        <p class="empty-card">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    `;
};


function loadBasket(i, menuIndex) {
    let item = basket[0];
    return  `
    <div class="new-item">
        <div class="card-name-price">
            <div class="bold">
                <span class="space-right">${item['amount'][i]}</span>
                <span class="underline-mark">${item['item'][i]}</span>
            </div>
            <span>${item['price'][i]} €</span>
        </div>
    
        <div class="card-extras">
            <div>${item['itemdescription'][i]}</div>
        </div>

        <div class="card-info-plusminus">
            <span class="underline-mark">Anmerkung hinzufügen</span>
            <div class="card-buttons">
                <svg class="select-button" onclick="removeFromCard(${menuIndex})" width="38px" height="38px" viewBox="0 0 1300 1300">
                    <path d="M1241.11,625.984C1254.15,625.984 1264.73,636.56 1264.73,649.606C1264.73,662.652 1254.15,673.228 1241.11,673.228L58.106,673.228C45.06,673.228 34.484,662.652 34.484,649.606C34.484,636.56 45.06,625.984 58.106,625.984L1241.11,625.984Z" style="fill:rgb(0,0,0);stroke:black;stroke-width:20px;"/>
                </svg>
                <svg class="select-button" onclick="addToCard(${menuIndex})" width="38px" height="38px" viewBox="0 0 1300 1300">
                    <path d="M1241.11,625.984C1254.15,625.984 1264.73,636.56 1264.73,649.606C1264.73,662.652 1254.15,673.228 1241.11,673.228L58.106,673.228C45.06,673.228 34.484,662.652 34.484,649.606C34.484,636.56 45.06,625.984 58.106,625.984L1241.11,625.984Z" style="fill:rgb(0,0,0);stroke:black;stroke-width:20px;"/>
                    <path d="M625.984,58.106C625.984,45.06 636.56,34.484 649.606,34.484C662.652,34.484 673.228,45.06 673.228,58.106L673.228,1241.11C673.228,1254.15 662.652,1264.73 649.606,1264.73C636.56,1264.73 625.984,1254.15 625.984,1241.11L625.984,58.106Z" style="fill:rgb(0,0,0);stroke:black;stroke-width:20px;"/>
                </svg>
            </div>
        </div>
    </div>
    `;
}





// function loadCategory(position) {


//     let category = categorys[0]['category'][position];
//     let categoryImg = categorys[0]['categoryImg'][position];

//     let content = `
   
//     <img class="menu-img" src="${categoryImg}" alt="${category}">
//     <h2 class="headline">${category}</h2>

//     `;
//     return content;
// }

