const apply = document.getElementById('apply');
const modal = document.querySelector('.haq-modal');
const close = document.querySelector('.close');

apply.addEventListener('click', function() {
    modal.classList.add('active');
});

close.addEventListener('click', function() {
    modal.classList.remove('active');
});

modal.addEventListener('click', function(e) {
    if( e.target == this ) {
        modal.classList.remove('active');
    }
});