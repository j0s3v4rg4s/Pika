const content = document.getElementsByClassName('productContainer')[0];

if (content) {
  const chield = document.createElement('div');
  chield.innerHTML = '<h1>pika extension</h1>';
  content.appendChild(chield);
}
