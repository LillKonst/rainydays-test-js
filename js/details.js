function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

function getJacketTitleFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}

function showLoadingIndicator() {
    const itemList = document.getElementById("grid-for-product-info");
    itemList.innerHTML = "<li>Loading...</li>";
}

async function fetchJacketDetail() {
    const jacketId = getJacketIdFromQuery();
    const title = getJacketTitleFromQuery();
    
    
    if (!jacketId) {
        return;
    }

const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
const jacketDetail = await response.json();


const titleContainer = document.getElementById("title");
const jacketDetailContainer = document.getElementById("jacket-details");

titleContainer.textContent = title;

jacketDetailContainer.innerHTML = ""; 
jacketDetailContainer.innerHTML += `<div class="grid-for-product-info">
<img src="${jacketDetail.image}" class="product-pic" alt="${jacketDetail.description}">
<div class="grid-con-prod-2">
<h1>${jacketDetail.title}</h1>
<h2>${jacketDetail.price}</h2>
<p>${jacketDetail.description}</p>

<form>
<fieldset class="size-container">
    <legend>SELECT SIZE</legend>
     ${jacketDetail.sizes.map((size) => `
    <input type="radio" id="${size}" value="${size}" name="size" />
    <label for="${size}">${size}</label>
    `).join("")} 
</fieldset>

</form>

<a href="/shoppingbag.html" id="addToBag">ADD TO BAG</a>
</div>`;
}



fetchJacketDetail();

    



