const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days/";

function showError(message){
    const errorContainer = document.getElementById("jackets-container");
    errorContainer.innerHTML = `<p> Error: ${message}</p>`;
}

async function getJackets() {
    showLoadingIndicator();
    try {
    const response = await fetch(rainyDaysAPI); 
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const results = await response.json();
    return results;
    } catch (error) {
        throw error; 
    }
}


async function displayJackets() {
    try {
    const jackets = await getJackets();
    const jacketsContainer = document.getElementById("jackets-container");
    jacketsContainer.innerHTML = "";

    
    for(i = 0; i < jackets.length; i++) {
        const jacket = jackets[i];

        const jacketDiv = document.createElement("a");
            jacketDiv.classList.add("jacketDiv");
            jacketDiv.addEventListener("click", () => {
            window.location.href = `products/jacket-details.html?id=${jacket.id}&title=${jacket.title}`;
            });
            jacketsContainer.appendChild(jacketDiv);
        
            const image = document.createElement("img");
            image.src = jacket.image;
            image.alt = jacket.description;
            image.classList.add("s-product-img", "grid-pr-1");
            jacketDiv.appendChild(image);

            const jacketTitle = document.createElement("h2");
            jacketTitle.classList.add("product-text1", "grid-pr-2");
            jacketTitle.innerHTML = `${jacket.title}`;
            jacketDiv.appendChild(jacketTitle);

            const jacketPrice = document.createElement("p");
            jacketPrice.classList.add("product-text2", "product-text3", "grid-pr-3");
            jacketPrice.innerHTML = `${jacket.price} ${jacket.discountedPrice}`;
            
            if (jacket.onSale) {
                const jacketPrice = document.createElement("p");
                jacketPrice.classList.add("product-text2", "product-text3", "grid-pr-3");
                jacketPrice.innerHTML = `<span class="discount">${jacket.price} </span> | ${jacket.discountedPrice}`;
                jacketDiv.appendChild(jacketPrice);          
            } else {
                const jacketPrice = document.createElement("p");
                jacketPrice.classList.add("product-text2", "product-text3", "grid-pr-3");
                jacketPrice.innerHTML = `${jacket.price}`;
                jacketDiv.appendChild(jacketPrice); 
            }
        }   
} catch (error) {
    showError(error.message);
} 
}

function showLoadingIndicator() {
    const itemList = document.getElementById("jackets-container");
    itemList.innerHTML = "<li>Loading...</li>";
}
    
document.addEventListener("DOMContentLoaded", () => {
    displayJackets();
});