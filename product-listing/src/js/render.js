// file: render.js

async function renderHello() {
  // const template = document.getElementById('template').innerHTML;
  const {products} = await getProducts();
  const productData = {
    "products" : products
  }

  fetch('./src/templates/product.mustache')
  .then((response) => response.text())
  .then((template) => {
    const rendered = Mustache.render(template, productData);
    document.getElementById('searchResults').innerHTML = rendered;   
  });
}