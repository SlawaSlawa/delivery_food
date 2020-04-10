'use script'
new WOW().init();

const cartBtn = document.getElementById('cart-btn'),
    modalWindow = document.querySelector('.modal'),
    close = document.querySelector('.close')



function toggleModal() {
    modalWindow.classList.toggle('is-open');
}



cartBtn.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
modalWindow.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.className == 'modal is-open') {
        toggleModal();
    }
});