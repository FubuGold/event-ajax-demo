function capitalizeFirstLetter(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    return words.join(" ");
}

function reverse(s){
    return s.split("").reverse().join("");
}

function changePriceFormat(price) {
    price = price.toString();
    price = reverse(price);
    price = price.match(/.{1,3}/g);
    return reverse(price.join("."))
}

function generateProduct(product) {
    if (product.tag) {
        product.tag = capitalizeFirstLetter(product.tag)
    }
    if (product.image) {
        product.image = "data:image/png;base64," + product.image;
    }
    product.price = changePriceFormat(product.price);
    product.unit_price = capitalizeFirstLetter(product.unit_price);
    const markup = `<div class="product-container" id="${product.name}">
    <img class="product-image" src="${product.image}" alt="${product.name}">
    <p class="discount">${product.discount ? `-${product.discount}%` : ""}</p>
    <p class="tag">${product.tag ? product.tag : ""}</p>
    
    <h3 class="product-name">${product.name}</h3>
    <p class="product-description">${product.short_desc}</p>
    <h4 class="product-price">${product.unit_price} ${product.price}</h4>
    <p class="product-old-price"><del>${product.old_price ? product.old_price : ""}</del></p>
    <div class="product-hover-utility">
        <button class="product-add-to-cart">Add to cart</button>
        <a href=""><span class="material-symbols-outlined">share</span>Share</a>
        <a href=""><span class="material-symbols-outlined">sync_alt</span>Compare</a>
        <a href=""><span class="material-symbols-outlined">favorite</span>Like</a>
    </div>
</div>
`;
    const sec_3 = document.getElementById("section-3"); // Create div with id="section-3" to test
    sec_3.insertAdjacentHTML("beforeend",markup)
}
