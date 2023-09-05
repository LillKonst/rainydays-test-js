const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days/";

const getJacketText = document.querySelectorAll(".jacketText");

async function getJackets() {
    const response = await fetch(rainyDaysAPI); 
    const results = await response.json();
    return results;
}


async function displayJackets() {
    const jackets = await getJackets();
    const jacketsContainer = document.getElementById("jackets-container");


    jacketsContainer.innerHTML = ""; 
    for(i = 0; i < jackets.length; i++) {
        const jacket = jackets[i];

        if (jacket.tags) {
            const jacketDiv = document.createElement("a");
            jacketDiv.classList.add("jacketDiv");
            jacketDiv.addEventListener("click", () => {
            window.location.href = `products/jacket-details.html?id=${jacket.id}`;
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
    }

    displayJackets();