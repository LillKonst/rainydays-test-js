function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

function getJacketTitleFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}

// fix this function
function sizeSelection(parameter) {
    select = document.getElementById("size-container").value = parameter;
}
  


async function fetchJacketDetail() {
    const jacketId = getJacketIdFromQuery();
    if (!jacketId) {
        return;
    }

const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
const jacketDetail = await response.json();

const title = getJacketTitleFromQuery();
const titleContainer = document.getElementById("title");

const jacketDetailContainer = document.getElementById("jacket-details");

titleContainer = document.getElementById("title");
titleContainer.textContent = title;

// fix the size buttons
jacketDetailContainer.innerHTML = ""; 
jacketDetailContainer.innerHTML += `<div class="grid-for-product-info">
<img src="${jacketDetail.image}" class="product-pic" alt="${jacketDetail.description}">
<div class="grid-con-prod-2">
<h1>${jacketDetail.title}</h1>
<h2>${jacketDetail.price} NOK</h2>
<p>${jacketDetail.description}</p>

<div class="size-container"> 
          <button id="XS" class="size-button" onclick=buttonSelection("XS")>${jacketDetail.sizes}</button>
          <button id="S" class="size-button" onclick=buttonSelection("S")>${jacketDetail.sizes}</button>
          <button id="M" class="size-button" onclick=buttonSelection("M")>${jacketDetail.sizes}</button>
          <button id="L" class="size-button" onclick=buttonSelection("L")>${jacketDetail.sizes}</button>
          <button id="XL" class="size-button" onclick=buttonSelection("XL")>${jacketDetail.sizes}</button>
          <button id="XXL" class="size-button" onclick=buttonSelection("XXL")>${jacketDetail.sizes}</button>
        </div>

<a href="#" class="add-to-button" id="shoppingbag" onclick="changeLocation();return false;"> ADD TO BAG</a>
</div>
</div>`;
}


fetchJacketDetail();



    



