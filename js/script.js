const rainyDaysAPI = "https://api.nsoroff.dev/api/v1/rainy-days/";

const getJacketText = document.querySelectorAll(".jacketText");

function showLoadingIndicator() {
    const itemList = document.getElementById("jackets-container");
    itemList.innerHTML = "<li>Loading...</li>";
}


async function getJackets() {
    showLoadingIndicator();
    const jacketsContainer = document.getElementById("jackets-container");
    try {
    const response = await fetch(rainyDaysAPI); 
    const results = await response.json();
    return results;
} catch (error) {
    const errorMessage = document.createElement("p");
        errorMessage.textContent = "Something went wrong.";
        errorMessage.classList.add("error-message");

        jacketsContainer.innerHTML = "";
        jacketsContainer.appendChild(errorMessage);
}
}


async function displayJackets() {
    try {
    const jackets = await getJackets();
    const jacketsContainer = document.getElementById("jackets-container");

    jacketsContainer.innerHTML = ""; 
    for(i = 0; i < jackets.length; i++) {
        const jacket = jackets[i];

        if (jacket.tags) {
            const jacketDiv = document.createElement("a");
            jacketDiv.classList.add("jacketDiv");
            jacketDiv.addEventListener("click", () => {
            window.location.href = `products/jacket-details.html?id=${jacket.id}&title=${jacket.title}`;
            });
        
            const image = document.createElement("img");
            image.src = jacket.image;
            image.alt = jacket.description;
            image.classList.add("s-product-img", "grid-pr-1");

            const jacketTitle = document.createElement("h2");
            jacketTitle.classList.add("product-text1", "grid-pr-2");
            jacketTitle.innerHTML = `${jacket.title}`;

            const jacketPrice = document.createElement("p");
            jacketPrice.classList.add("product-text2", "product-text3", "grid-pr-3");
            jacketPrice.innerHTML = `${jacket.price}`;

            jacketsContainer.appendChild(jacketDiv);
            jacketDiv.appendChild(image);
            jacketDiv.appendChild(jacketTitle);
            jacketDiv.appendChild(jacketPrice);          
            } 
        }   
} catch (error) {
    const errorMessage = document.createElement("p");
        errorMessage.textContent = "Something went wrong.";
        errorMessage.classList.add("error-message");

        jacketsContainer.innerHTML = "";
        jacketsContainer.appendChild(errorMessage);
} 
}
    
document.addEventListener("DOMContentLoaded", () => {
    displayJackets();
});