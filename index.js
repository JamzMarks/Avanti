import { handleNewsletterSubmit } from './src/components/newsletterForm.js';


document.addEventListener("DOMContentLoaded", () => { 

    //Menu hamburguer button
    document.getElementById("menuButton").addEventListener("click", function(){
        let checkbox = document.getElementById("menuCheckbox");
        checkbox.checked = !checkbox.checked;
    })

    //newsletterForm
    document.getElementById("newsLetterForm").addEventListener('submit', handleNewsletterSubmit);
});
