
var product = new Object;
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
const quantities = [...document.getElementsByClassName('quantity')].map((quantity,) => quantity.value);
const unitsCost = [...document.getElementsByClassName('unit-cost')].map(unit => unit.innerHTML.toString().split('$').join(''));
const prices = [...document.getElementsByClassName('total-price')];
for(let i = 0; i<quantities.length; i++){
  product[i] = Object.assign({quantity:quantities[i]});
  product[i].unitCost = unitsCost[i];
  product[i].price = prices[i].innerHTML = `$${(parseFloat(unitsCost[i])*quantities[i]).toFixed(2)}`;
}
console.log(product);

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  
  var calculatePriceButton = document.querySelector('#calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

