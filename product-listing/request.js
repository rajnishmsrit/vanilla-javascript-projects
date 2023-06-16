async function getData(){
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%')
  return await response.json();
}