/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Garrin Miller";
let currentYear = 2024;
let profilePicture = "images/IMG_3723.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
yearElement = document.querySelector("#year");
imageElement = document.querySelector("img");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let favoriteFoods = ["pizza", "hamburgers", "smoothies"];
foodElement.innerHTML = `${favoriteFoods}`;
let anotherFavoriteFood = ["noodles"];
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.splice(0, 1);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;


