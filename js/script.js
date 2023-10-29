const corsAnywhereUrl = "https://noroffcors.onrender.com/";
const originalUrl = "https://rainydays-api.lillkonst.no//wp-json/wc/store/products";
const rainyDaysAPI = corsAnywhereUrl + originalUrl;



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


async function displayJacketsProductList() {
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
            image.src = jacket.images[0].src;
            image.alt = jacket.description;
            image.classList.add("s-product-img", "slider-img", "grid-pr-1");
            jacketDiv.appendChild(image);

            
            const jacketText = document.createElement("div");
            jacketText.classList.add("jacketText");
            jacketDiv.appendChild(jacketText);

            const jacketTitle = document.createElement("h2");
            jacketTitle.classList.add("product-text1", "grid-pr-2");
            jacketTitle.innerHTML = `${jacket.name}`;
            jacketText.appendChild(jacketTitle);

            const jacketPrice = document.createElement("p");
            jacketPrice.classList.add("product-text2", "product-text3", "grid-pr-3");
            jacketPrice.innerHTML = `${jacket.prices.price} ${jacket.discountedPrice}`;
            
            if (jacket.onSale) {
                const jacketPrice = document.createElement("p");
                jacketPrice.classList.add("product-text2", "product-text3", "grid-pr-3", "sale");
                jacketPrice.innerHTML = `${jacket.discountedPrice}`;
                jacketText.appendChild(jacketPrice);          
            } else {
                const jacketPrice = document.createElement("p");
                jacketPrice.classList.add("product-text2", "product-text3", "grid-pr-3");
                jacketPrice.innerHTML = `${jacket.prices.price/100}`;
                jacketText.appendChild(jacketPrice); 
            }
        }   
} catch (error) {
    showError(error.message);
} 
}
    
document.addEventListener("DOMContentLoaded", () => {
    displayJacketsProductList();
});

function showErrorSlider(message){
    const errorSlider = document.getElementById("jacket-slider1");
    errorSlider.innerHTML = `<p> Error: ${message}</p>`;
}

async function displayJacketSlider() {
    try {
    const jackets = await getJackets();
    const jacketSlider1 = document.getElementById("jacket-slider1");
    jacketSlider1.innerHTML = "";

    
    for(i = 0; i < jackets.length; i++) {
        const jacket = jackets[i];
        
            if (jacket.name) {
                
            const jacketDiv = document.createElement("a");
            jacketDiv.classList.add("jacketDiv");
            jacketDiv.addEventListener("click", () => {
            window.location.href = `products/jacket-details.html?id=${jacket.id}&title=${jacket.title}`;
            });
            jacketSlider1.appendChild(jacketDiv);

            const image = document.createElement("img");
            image.src = jacket.images[0].src;
            image.alt = jacket.description;
            image.classList.add("slider-img");
            jacketDiv.appendChild(image);
            
            const jacketText = document.createElement("div");
            jacketText.classList.add("jacketText");
            jacketDiv.appendChild(jacketText);

            const jacketTitle = document.createElement("h2");
            jacketTitle.classList.add("product-text1", "grid-pr-2");
            jacketTitle.innerHTML = `${jacket.name}`;
            jacketText.appendChild(jacketTitle);        
            } 
        }   
} catch (error) {
    showErrorSlider(error.message);
} 
}

function showLoadingIndicator() {
    const itemList = document.getElementById("jackets-container");
    itemList.innerHTML = "<li>Loading...</li>";
}
    
document.addEventListener("DOMContentLoaded", () => {
    displayJacketSlider();
});
