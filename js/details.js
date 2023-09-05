function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

async function fetchJacketDetail() {
    const jacketId = getJacketIdFromQuery();
    if (!jacketId) {
        return;
    }

const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
const jacketDetail = await response.json();



const jacketDetailContainer = document.getElementById("jacket-details");


jacketDetailContainer.innerHTML = ""; 
jacketDetailContainer.innerHTML += `<h1>${jacketDetail.title}</h1>`;

}


fetchJacketDetail();



    



