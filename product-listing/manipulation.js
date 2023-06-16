// // Define the data
const data = {
  users: [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    // ... more user data
  ]
};

// Render the template with data

// const greetingTemplate = `
//     <h1>Hello, <%= name %>!</h1>
// `;

// const name = "John";
// const renderedGreeting = ejs.render(greetingTemplate, { name });
// document.getElementById("placeholderBox").innerHTML = renderedGreeting;

const renderedHtml = ejs.renderFile('./templates/products.ejs', data, function(err, html) {
  if (err) {
    console.error(err);
  } else {
    // Use the rendered HTML
    document.getElementById('placeholderBox').innerHTML = html;
  }
});

// renderedHtml();

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