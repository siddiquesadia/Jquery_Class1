$(function(){

    // Jquery Start

// Modalbox Show

let clickBtn= $(`.clickBtn`);
let closeBtn= $(`.closeBtn`);

// To show Modal
clickBtn.click(function(){
    $(`.box`).fadeIn(300);
    $(`.modal`).delay(200).slideDown(300);
});

// To cancel Modal

function close(){
    
        $(`.box`).fadeOut(300);
        $(`.modal`).slideUp(300);
    
}

closeBtn.click(close);
$(`.box`).click(close);

// Password Toggle

let showBtn= $(`.show`);
let input= $(`.input`);

showBtn.click(function(){
    let type = input.attr(`type`);
    if(type== `password`){
        input.attr(`type`,`text`);
        $(this).html(`<i class="bi bi-eye-slash"></i>`);
    }
    else{
        input.attr(`type`,`password`);
        $(this).html(`<i class="bi bi-eye"></i>`);
    }
})

    // Jquery End

});