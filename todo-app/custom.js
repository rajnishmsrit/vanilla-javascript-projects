const inputElement = document.getElementById("todo-input");

inputElement.addEventListener('keyup', function(event) {
  if (event.key === "Enter") {
    const resultElement = document.getElementById("todo-result");
    const item = document.createElement("input");
    item.type = 'checkbox';
    item.value = 'example value';
    const textNode = document.createTextNode(inputElement.value);
    const label = document.createElement("label");
    label.appendChild(textNode);
    
    //itemTag.appendChild(itemValue);
    
    
    resultElement.append(item);
    resultElement.append(label);
    // resultElement.append("<br>");
    inputElement.value = "";
  }
})