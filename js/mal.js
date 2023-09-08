function getParameter(paramenter) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(paramenter);
}
// fix this function
function sizeSelection(parameter) {
    select = document.getElementById("size-container").value = parameter;
}



<div class="size-container"> 
          <button id="XS" class="size-button" onclick=buttonSelection("XS")>${jacketDetail.sizes}</button>
          <button id="S" class="size-button" onclick=buttonSelection("S")>${jacketDetail.sizes}</button>
          <button id="M" class="size-button" onclick=buttonSelection("M")>${jacketDetail.sizes}</button>
          <button id="L" class="size-button" onclick=buttonSelection("L")>${jacketDetail.sizes}</button>
          <button id="XL" class="size-button" onclick=buttonSelection("XL")>${jacketDetail.sizes}</button>
          <button id="XXL" class="size-button" onclick=buttonSelection("XXL")>${jacketDetail.sizes}</button>
        </div>






        <div class="pick-container>
<form class="size-container" action="/html/checkout.html">
                                <div class="size-container">
                                    <fieldset class="line1">
                                        <legend>Select size</legend>
                                        ${jacket.sizes
                                          .map(
                                            (size) => `
                                            <input type="sizes" id="${size}" value="${size}" name="size" />
                                            <label for="${size}">${size}</label>
                                        `
                                          )
                                          .join("")} 
                                    </fieldset>
                                    <div class="line2">
                                        <button id="add-to-bag-btn" type="submit"> class= "add-to-button"
                                            Add to bag
                                        </button>
                                    </div>
                                </div>
                            </form>
                            </div>


document
      .getElementById("add-to-bag-btn")
      .addEventListener("click", () => addToShoppingbag(jacket));








    <div class="pick-container>
        <form class="size-container" action="/html/checkout.html">
            <div class="size-container">
                <fieldset class="line1">
                    <legend>Select size</legend>
                     ${jacket.sizes.map(
                    (size) => `
                    <input type="sizes" id="${size}" value="${size}" name="size" />
                    <label for="${size}">${size}</label>
                    `)
                    .join("")} 
                </fieldset>
                 <div class="line2">
                    <button id="add-to-bag-btn" type="submit"> class= "add-to-button" Add to bag </button>
                </div>
            </div>
        </form>
    </div>









    <div class="size-container"> 
          <button id="XS" class="size-button" onclick=buttonSelection("XS")>${jacketDetail.sizes}</button>
          <button id="S" class="size-button" onclick=buttonSelection("S")>${jacketDetail.sizes}</button>
          <button id="M" class="size-button" onclick=buttonSelection("M")>${jacketDetail.sizes}</button>
          <button id="L" class="size-button" onclick=buttonSelection("L")>${jacketDetail.sizes}</button>
          <button id="XL" class="size-button" onclick=buttonSelection("XL")>${jacketDetail.sizes}</button>
          <button id="XXL" class="size-button" onclick=buttonSelection("XXL")>${jacketDetail.sizes}</button>
        </div>




        <div class="pick-container>
        <form class="size-container" action="/checkout.html">
                <fieldset>
                    <legend>Select size</legend>
                     ${jacket.sizes.map((size) => `
                    <input type="sizes" id="${size}" value="${size}" name="size" />
                    <label for="${size}">${size}</label>
                    `).join("")} 
                </fieldset>
                <button type="submit" id="add-to-bag-btn" class= "add-to-button">Add to bag</button>
            </div>
        </form>
    </div>



























