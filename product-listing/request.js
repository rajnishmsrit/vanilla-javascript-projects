async function getProducts(){
  const response = await fetch('https://dummyjson.com/products')
  return await response.json();
}

// Function to read the Handlebars template file and assign it an ID
function loadTemplateAsElement(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(templateContent => {
      const templateElement = document.createElement('script');
      templateElement.id = elementId;
      templateElement.type = 'text/x-handlebars-template';
      templateElement.innerHTML = templateContent;
      document.body.appendChild(templateElement);
    })
    .catch(error => {
      console.error('Error loading template file:', error);
    });
}

window.addEventListener("load", (event) => {
  updateHandlebarTemplates();
  console.log("page is fully loaded");
});

function updateHandlebarTemplates(){
  const template = document.getElementById('productTemplateId').innerHTML;
  const compiledTemplate = Handlebars.compile(template);
  const data = { name: 'John Doe' };
  const renderedTemplate = compiledTemplate(data);
  document.getElementById('placeholderBox').setHTML = renderedTemplate;
}

