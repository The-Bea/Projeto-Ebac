$(document).ready(function(){


    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            },

        },
        submitHandler: function (form) {
            alert('Sua mensagem foi enviada!');
            form.reset();
        },
        invalidHandler: function (evento, validador) {
            alert('Por favor, preencha os campos para prosseguir!')
        }
    })

})
