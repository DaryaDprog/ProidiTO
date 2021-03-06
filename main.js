$(document).ready(function(){

    /* Smooth scroll */
    $('[data-scroll]').on('click', function(){
        $('[data-scroll]').removeClass('active');
        $(this).addClass('active');
        let block = $(this).attr('data-scroll');
       $('html, body').animate({
                scrollTop: $('.' + block).offset().top-125  
            }, 1000); 
    });


    /* Burger Menu */

$('.navToggle').on('click', function(){
$('.navToggleItem').toggleClass('active');
$('.nav').toggleClass('active');
});




/* Mail */
    
$('#sendMail').on('click', function() {

    var message = $("#text").val().trim();
    var email = $("#email").val().trim();

    if(message == "") {
        $("#errorMess").text("Введите вопрос");
        return false;
    } else if(email == "") {
        $("#errorMess").text("Введите email");
        return false;
    }
    $("#errorMess").text("");

    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache: false,
        data: { 'message': message, 'email': email },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop('disabled', true);
        },
        success: function(data) {
            if(!data)
                alert("Ошибка отправки сообщения.");
            else
                $("#mailForm").trigger("reset");

            $("#sendMail").prop('disabled', false);
        }
    });
});


});
