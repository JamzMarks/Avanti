console.log("O script foi carregado corretamente!");

import {loadProducts, viewMoreProducts} from './src/utils/loadProduct.js'
import { handleNewsletterSubmit } from './src/components/newsletterForm.js';
import { insertReview } from './src/components/review/insertReview.js';
import { moveSlider } from './src/components/review/slides.js';

const dataUrl = {
    newProducts: './src/data/products.json',
    topProducts: './src/data/topProducts.json'
}

const newArrivalsPL = document.getElementById('newArrivals');
const topSellingPL = document.getElementById('topSelling');

async function initialize() {
    loadProducts(newArrivalsPL, dataUrl.newProducts);
    loadProducts(topSellingPL, dataUrl.topProducts);
    await insertReview('reviewList', "./src/data/reviews.json");
}

document.addEventListener("DOMContentLoaded", () => { 
    //Close sign in top message
    const signMsgBtn = document.getElementById("signMsgBtn");
    if (signMsgBtn) {
        signMsgBtn.addEventListener("click", function() {
            document.getElementById("signMsg").remove();
        });
    }

    //Menu hamburguer button
    document.getElementById("menuButton").addEventListener("click", function(){
        let checkbox = document.getElementById("menuCheckbox");
        checkbox.checked = !checkbox.checked;
    })

    //View more button
    document.querySelectorAll(".productListBtn").forEach(button => {
        button.addEventListener("click", function(event){
            const element = this.parentElement.querySelector(".productList");
            const btnId = event.target.id;
            viewMoreProducts(element, btnId, dataUrl);
        })
    })

    //slider btns
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    prevBtn.addEventListener("click", () => moveSlider("prev"));
    nextBtn.addEventListener("click", () => moveSlider("next"));

    //newsletterForm
    document.getElementById("newsLetterForm").addEventListener('submit', handleNewsletterSubmit);
});

initialize();
