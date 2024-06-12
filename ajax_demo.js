class colorChangeDemo {
    constructor() {
        this.textColorChange = this.textColorChange.bind(this);
        this.colorChangeBtn = document.getElementById("color-change-button");
        this.changeColorText = document.getElementById("color-changing-text");
        this.colorChangeBtn.addEventListener("click",this.textColorChange);
    }

    rangeRNG(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    textColorChange() {
        this.changeColorText.style.color = 'rgb(' + this.rangeRNG(0,255) + ',' + this.rangeRNG(0,255) + ',' + this.rangeRNG(0,255) + ')';
    }
}

class ajaxDemo {
    constructor() {
        this.getProduct = this.getProduct.bind(this);
        this.clearProduct = this.clearProduct.bind(this);
        this.displayProduct = this.displayProduct.bind(this);

        this.getButton = document.getElementById("get-product-button");
        this.clearButton = document.getElementById("clear-product-button");
        this.displayResult = document.getElementById("get-clear-product-result");
        this.displayButton = document.getElementById("display-button");
        this.displayProductText = document.getElementById("display-product-text");

        this.product = null;
        this.fetched = false;
        this.numProduct = 0;
        this.id = 0;
    }

    async getProduct() {
        if (this.fetched) return 0;
        this.product = await fetch("https://dummyjson.com/products");
        this.product = await this.product.json();
        console.log(this.product);
        this.product = await this.product.products;
        this.displayResult.textContent = "Got product";
        this.fetched = true;
        this.numProduct = this.product.length;
        return 1;
    }

    clearProduct() {
        this.product = null;
        this.fetched = false;
        this.id = 0;
        this.numProduct = 0;
        this.displayResult.textContent = "Cleared products";
        this.displayProductText.innerHTML = "";
    }

    displayProduct() {
        if (!this.fetched) {
            this.displayProductText.textContent = "No product to display";
            return;
        }
        let currentProduct = this.product[this.id];
        this.displayProductText.innerHTML = `id = ${currentProduct.id} <br>
title : ${currentProduct.title} <br>
description : ${currentProduct.description} <br>
category : ${currentProduct.category} <br>
price : ${currentProduct.price} <br>
ranking : ${currentProduct.ranking} <br>
stock: ${currentProduct.stock} <br>
`;
        this.id = (this.id + 1) % this.numProduct;
    }

    addEvent() {
        this.getButton.addEventListener("click",this.getProduct);
        // this.getButton.addEventListener("click",() => setTimeout(this.getProduct,2000));
        this.clearButton.addEventListener("click",this.clearProduct);
        this.displayButton.addEventListener("click",this.displayProduct);
    }
}

let colorChangeClass = new colorChangeDemo();
let ajaxClass = new ajaxDemo(); ajaxClass.addEvent();

