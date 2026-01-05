$(document).ready(function() {
    $("header button").click(function() {
        $("form").slideDown();
    });

    $("#botao-cancelar").click(function(e) {
        e.preventDefault();
        $("form").slideUp();
    });

    $("form").on("submit", function(e) {
        e.preventDefault();
        const novaAtividade = $("#nova-atividade").val();
        const novoItem = $("<li></li>");
        $(`<input type="checkbox" name="${novaAtividade}" id="${novaAtividade}" >`).appendTo(novoItem);
        $(`<label for="${novaAtividade}">${novaAtividade}</label>`).appendTo(novoItem);
        novoItem.appendTo('ul');
        $("#nova-atividade").val("");
        $("form").slideUp();

    });


$("ul").on("change", "input[type='checkbox']", function() {
    if ($(this).is(":checked")) {
        $(`label[for='${this.id}']`).addClass("feito");
    } else {
        $(`label[for='${this.id}']`).removeClass("feito");
    }
});
});  