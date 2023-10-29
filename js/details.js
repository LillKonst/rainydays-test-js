const corsAnywhereUrl = "https://noroffcors.onrender.com/";
const originalUrl = "https://rainydays-api.lillkonst.no/wp-json/wc/store/products";
const rainyDaysAPI = corsAnywhereUrl + originalUrl;

function showError(message) {
    const errorContainer = document.getElementById("jackets-container");
    errorContainer.innerHTML = `<p> Error: ${message}</p>`;
}

function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
}

function getJacketTitleFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}

async function fetchJacketDetail() {
    const title = getJacketTitleFromQuery();
    const jacketId = getJacketIdFromQuery();
    if (!jacketId) {
        showError("Jacket is not found");
        return;
    }

    try {
        const response = await fetch(`${rainyDaysAPI}/${jacketId}`);
        if (!response.ok) {
            throw new Error("Jacket is not found");
        }
        const jacketDetail = await response.json();

        const titleContainer = document.getElementById("title");
        const jacketDetailContainer = document.getElementById("jacket-details");

        titleContainer.textContent = title;

        const imageSrc = jacketDetail.images[0].src;
        const price = jacketDetail.prices.price/100;

        const availableSizes = jacketDetail.attributes.map(attr => attr.name);

        jacketDetailContainer.innerHTML = `
            <div class="grid-for-product-info">
                <img src="${imageSrc}" class="product-pic" alt="${jacketDetail.description}">
                <div class="grid-con-prod-2">
                    <h1>${jacketDetail.name}</h1>
                    <h2>${price}</h2>
                    <p>${jacketDetail.description}</p>
                </div>
                <div class="grid-con-prod-3">
                    <form>
                        <fieldset class="size-container">
                            <legend>SELECT SIZE</legend>
                            ${availableSizes.map(size => `
                                <input type="radio" id="${size}" value="${size}" name="size" />
                                <label for="${size}">${size}</label>
                            `).join("")} 
                        </fieldset>
                    </form>
                    <a href="/shoppingbag.html" id="addToBag">ADD TO BAG</a>
                </div>
            `;
    } catch (error) {
        showError(error.message);
    }
}

fetchJacketDetail();
