const updateProductListing = async () => {
  const {drinks} = await getData();
  const resultsId = document.getElementById("searchResults");
  drinks.map((item) => {
    const productDiv = document.createElement("div");
    const productImageElement = document.createElement("img");
    productImageElement.src = item.strDrinkThumb;
    const productLabelElement = document.createElement("label");
    const productLabelTextElement = document.createTextNode(item.strDrink);
    const productBreakElement = document.createElement("br")
    productLabelElement.append(productLabelTextElement);
    productDiv.append(productImageElement);
    productDiv.append(productBreakElement);
    productDiv.append(productLabelElement);
    resultsId.append(productDiv);
  })
}

updateProductListing();