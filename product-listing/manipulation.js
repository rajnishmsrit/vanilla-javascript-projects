const updateProductListing = async () => {
  console.log(await getProducts());
  const {products} = await getProducts();
  const resultsId = document.getElementById("searchResults");
  products.map((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("container-item");
    const productImageElement = document.createElement("img");
    productImageElement.src = item.thumbnail;
    const productLabelElement = document.createElement("label");
    const productLabelTextElement = document.createTextNode(item.title);
    const productBreakElement = document.createElement("br")
    productLabelElement.append(productLabelTextElement);
    productDiv.append(productImageElement);
    productDiv.append(productBreakElement);
    productDiv.append(productLabelElement);
    resultsId.append(productDiv);
  })
}
updateProductListing();