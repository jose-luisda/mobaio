$(document).ready(function() {
    

    function media_query() {
        if( $(window).width() <= 600){
            $('#fundo-login-campos').addClass('fundo-login-campos2').removeClass('fundo-login-campos')
            $('#fundo-login-campos').css({'margin-top':'4em'})
            $('#formulario-senha button').css({
                'margin-left': "0.5em"
            })
        }else{
            $('#fundo-login-campos').removeClass('fundo-login-campos2').addClass('fundo-login-campos').removeAttr('style')
        };
    }

    
    setInterval(() => {
        media_query();
    }, 100);
});