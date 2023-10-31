var btnOpen = document.querySelector('.open_model_btn');
var model = document.querySelector('.model');
var iconClose = document.querySelector('.model_header i');
var btnClose = document.querySelector('.model_footer button');

function toggleModel(e) {
    console.log(e.target);
    model.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModel);
iconClose.addEventListener('click', toggleModel);
btnClose.addEventListener('click', toggleModel);
// model.addEventListener('click', toggleModel);