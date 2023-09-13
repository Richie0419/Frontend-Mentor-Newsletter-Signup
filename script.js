const form = document.querySelector('form');
const newsBox = document.querySelector('.news-box-container');
const card = document.querySelector('.card');
const dismissButton = card.querySelector('.dismiss-btn');
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');
const subscribedEmailElement = document.getElementById('subscribed-email');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();

    if (email === '') {
        showError('Valid email required !!!');
    }
    else {
        hideError();
        newsBox.classList.add('hide');
        card.classList.remove('hide');
        emailInput.value = '';
        subscribedEmailElement.textContent = email;
    }
});

dismissButton.addEventListener('click', () => {
    card.classList.add('hide');
    newsBox.classList.remove('hide');
    emailInput.value = '';
    subscribedEmailElement.textContent = '';
});

function showError(errorMessage) {
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    emailInput.classList.add('error');

    setTimeout(() => {
        hideError();
    }, 5000);
}

function hideError() {
    errorElement.style.display = 'none';
    emailInput.classList.remove('error');
}
