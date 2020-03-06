$(document).ready(function(){
    $("#get_location").on('click', function(event){
        //Previene el comportamiento por defecto (seguir el link), o sea el botón no va xa ningun lado
    event.preventDefault();
        //Cambia el icono por un spinner
    $(this).html('<i class="fa fa-spinner fa-spin"> </i>')
    //Revisa si hay disponible geolocalizacion
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getAddress);
    } else {
        $('body').append("Geolocation is not supported by this browser.");
    }
    })
    function getAddress(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $.ajax({
            url: '/locations/find_address',
            type: 'GET',
            dataType: 'json',
            data: {latitude: latitude, longitude:
            longitude}
        })
        .done(function(data){
            $('#user_address').val(data.address)
        })
        .always(function(data){
            $("#get_location").html('<i class="fa fa-map-marker"> </i>');
        })
    }
})
