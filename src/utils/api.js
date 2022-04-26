

export async function getProducts() {
  const products = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(res => res.json());

  return products;
}
