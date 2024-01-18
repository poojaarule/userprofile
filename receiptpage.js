let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientList = recipeObj.ingredients; //get the ingredients property value

//Access the HTML elements
let recipeTitleEl = document.getElementById("recipeTitle");
let imgContainerEl = document.getElementById("imgContainer");
let imgEl = document.getElementById("img");
let ingredientListContainerEl = document.getElementById("ingredientListContainer");

recipeTitleEl.textContent = recipeObj.title; //add the content for recipeTitleEl to display the title

imgEl.setAttribute("src", recipeObj.imgSrc); //add the src attribute value to display the image 
imgEl.classList.add("w-100"); //add the bootstrap class name 'w-100' to appear better

for (let ingredient of ingredientList) { //use for-of loop to iterate over the ingredientList and display the items present in it
    let ingredientEl = document.createElement("li"); //create li element
    ingredientEl.textContent = ingredient; //add content for the ingredientEl to display the item
    ingredientEl.classList.add("ingredient"); //add the class name
    ingredientListContainerEl.appendChild(ingredientEl); //append the ingredientEl into the ingredientListContainerEl
}