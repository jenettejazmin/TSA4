$(document).ready(function() {
    $('.grid-item').click(function() {
        var title = $(this).data('title');
        var description = $(this).data('description');
        $('.overlay-title').text(title);
        $('.overlay-description').text(description);
        $('.overlay').fadeIn();
    });
    $('.close').click(function() {
        $('.overlay').fadeOut();
    });
    $('.main-menu').click(function() {
        $('.grid-item').toggleClass('hide');
    });
});

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
    let target = preview.getAttribute('data-target');
    if(name == target){
        preview.classList.add('active');
    }
    });
};
});

previewBox.forEach(close =>{
close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
};
});
