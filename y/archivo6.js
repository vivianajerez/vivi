$(document).ready(function() {
    $("#unlockCheck").change(function() {
        if ($(this).is(":checked")) {
            // Mostrar la sorpresa con animación
            $("#surpriseContainer").fadeIn().addClass("bounce");
        } else {
            // Ocultar la sorpresa
            $("#surpriseContainer").fadeOut().removeClass("bounce");
        }
    });
});
