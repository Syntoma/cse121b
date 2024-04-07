/* W06: Project */

/* Declare and initialize global variables */
const catPictureElement = document.querySelector("#catPicture");
const catFactElement = document.querySelector("#catFact");
let catPicture;
let catFact;

/* async displayCatPicture Function */
const displayCatPicture = (catData) => {
    
    //first reset the previous picture
    resetPicture();
    console.log(catData);

    //then assign it to the html
    let img = document.createElement("img");
    img.setAttribute("src", catData[0].url);
    catPictureElement.appendChild(img);
    
}

/* async displayCatFact Function */
const displayCatFact = (factData) => {
    
    //first reset the previous fact
    resetFact();
    console.log(factData);

    //then assign it to the html
    let h3 = document.createElement("h3");
    h3.textContent = factData.data;
    catFactElement.appendChild(h3);

}

/* async getCatPicture Function using fetch()*/
const getCatPicture = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (response.ok) {
        catPicture = await response.json(); 
        displayCatPicture(catPicture);
    }
}

/* async getCatFact Function using fetch()*/
const getCatFact = async () => {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    if (response.ok) {
        catFact = await response.json(); 
        displayCatFact(catFact);
    }
}

//Function to reset the picture
const resetPicture = () => {
    catPictureElement.innerHTML = "";
 };

 //Function to reset the fact
const resetFact = () => {
    catFactElement.innerHTML = "";
 };

 //this function gets both the picture and the fact
 function getCat()
 {
    getCatPicture();
    getCatFact();
 };
 
//get the picture and cat when the button is pressed.
document.querySelector('#getCat').addEventListener('click', getCat);