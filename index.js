let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
let modalClose = document.getElementsByClassName('modalClose')[0];

modalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}


function clickOutside(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
    }
}
