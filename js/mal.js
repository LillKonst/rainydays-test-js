function showLoadingIndicator() {
    const itemList = document.getElementById("jackets-container");
    itemList.innerHTML = "<li>Loading...</li>";
}

const loading = document.querySelector(".loader");

setTimeout(function(){
    loading.classList.remove("loading-indicator");
}, 1000);


jacketContainer.innerHTML = `<div class="loading-animation">
<div class="loader"></div>
</div>`;









