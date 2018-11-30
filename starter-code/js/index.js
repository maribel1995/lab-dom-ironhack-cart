
function deleteItem(e){
  const delBtn = e.currentTarget;
  const container = delBtn.parentNode.parentNode;
  const content = container.parentNode;
  content.removeChild(container);  
  getTotalPrice();
}

function updatePriceByProduct(productPrice, index){
  const quantity = document.getElementsByClassName('quantity')[index].value;
  const price = document.getElementsByClassName('price')[index].innerHTML = parseFloat(quantity*productPrice).toFixed(2);
  return {quantity: quantity, unitCost: productPrice, price:price};
}
function getPriceByProduct(){
  const products = [];
  const unitCost = [...document.getElementsByClassName('unit-cost')];
   unitCost.forEach((unit, i) => {
    const product = updatePriceByProduct(unit.innerHTML.toString().split('$').join(''), i)
    products.push(product);
  });
  return products;
}

function getTotalPrice() {
  const products = getPriceByProduct();
  const totalPrice = products.reduce((acc, product) =>  acc+ parseFloat(product.price), 0);
  document.querySelector('.total-price').innerHTML = `$${totalPrice}`;
}

function wrap(){
  const wrap = document.createElement("DIV");
  wrap.classList.add("wrap");
  return wrap;
}
function createQuantityInput(){
  const label = document.createElement("LABEL");
  const labelText = document.createTextNode("QTY");
  label.appendChild(labelText);
  const quantityWrap = wrap();
  const quantity = document.createElement("INPUT");
  quantity.classList.add('quantity');
  quantity.setAttribute("type","number");
  quantity.setAttribute("value", 0);
  quantityWrap.appendChild(label);
  quantityWrap.appendChild(quantity);
  return quantityWrap;
}

function createDeleteButton(){
  const btnWrap = wrap();
  const btn = document.createElement("BUTTON");
  btn.classList.add('btn');
  btn.classList.add('btn-delete');
  const text = document.createTextNode("Delete");
  btn.onclick = deleteItem;
  btn.appendChild(text);
  btnWrap.appendChild(btn);
  return btnWrap;
}

function createPrice(){
  priceWrap = wrap();
  const price = document.createElement("SPAM");
  price.classList.add("price");
  const text = document.createTextNode("$0.00");
  price.appendChild(text);
  priceWrap.appendChild(price);
  return priceWrap;
}

function createitemUnitPrice(itemUnitPrice){
  const priceSpam = document.createElement("SPAM");
  priceSpam.classList.add("unit-cost");

  const priceText = document.createTextNode(`$${itemUnitPrice}`);
  priceSpam.appendChild(priceText);

  const priceWrap = wrap();
  priceWrap.appendChild(priceSpam);

  return priceWrap;
}

function createItemName(itemName){
const nameSpam = document.createElement("SPAM");
nameSpam.classList.add("product-name");
const nameText = document.createTextNode(itemName);
nameSpam.appendChild(nameText);
const nameWrap = wrap();
nameWrap.appendChild(nameSpam);
return nameWrap;
}


function createNewItem(){
  const newItems = document.querySelector('.box');
  const container = document.createElement("DIV")
  container.classList.add("container");
  newItems.appendChild(container);
  const name = document.getElementById("new-item-name").value;
  const cost = document.getElementById("new-item-cost").value;
  
  if(name != "" && cost != ""){
    container.appendChild(createItemName(name));
    container.appendChild(createitemUnitPrice(parseFloat(cost).toFixed(2)));
    container.appendChild(createQuantityInput());
    container.appendChild(createPrice());
    container.appendChild(createDeleteButton());
  }
}

window.onload = function(){
  
  var calculatePriceButton = document.querySelector('#calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  
  createItemButton.onclick = createNewItem;
  createDeleteButton()
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

