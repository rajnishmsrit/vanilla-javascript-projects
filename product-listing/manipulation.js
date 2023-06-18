
const updateProductListing = async () => {
  console.log(await getProducts());
  const {products} = await getProducts();
  const resultsId = document.getElementById("searchResults");
  let containerItem = "";
  products.map((item) => {
    containerItem += `<div class="container-item">
    <img src="${item.thumbnail}"><br>
    <label>${item.title}</label></div>
    `;
  })
  resultsId.setHTML(containerItem);
}

updateProductListing();