export function handleNewsletterSubmit(event){
    event.preventDefault();
    const name = document.getElementById("NLNameInput").value;
    const email = document.getElementById("NLEmailInput").value;
    const validEmail = validateEmail(email);
    if (validEmail && name != "") {
        alert('Um link de confirmação foi enviado para o seu e-mail. Por favor, verifique sua caixa de entrada.');
    } else {
        alert('Insira um e-mail válido!');
    }
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    return emailPattern.test(email);
}