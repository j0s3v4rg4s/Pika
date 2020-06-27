const elemnts = document.getElementsByClassName('productContainer');
const productContainer = elemnts[0];

const graphic = document.createElement('div');
graphic.innerHTML = '<h1>Pika extension</h1>';
productContainer.appendChild(graphic);

function log(any) {
  console.log('[Pika]', any);
}
