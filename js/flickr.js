$(document).ready(function() {

    var animal;
    var flickrOptions;

    $("button").click(function(){
        $("button").removeClass("selected");
        $(this).addClass("selected");
        animal= $(this).text()
        flickrOptions = {
            tags: animal,
            format: "json"
        };
        $.getJSON(flickerApi,flickrOptions,displayPhotos);
    })
    var flickerApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    function displayPhotos(data){
        var photoHTML = "<ul>";
        $.each(data.items, function(i,photo){
            photoHTML += "<li class='grid-25 tablet-grid-50'>";
            photoHTML += "<a href='" + photo.link + "' class='image'>";
            photoHTML += "<img src='" + photo.media.m + "'>";
            photoHTML += "</a></li>";
        })
        photoHTML += "</ul>";
        $("#photos").html(photoHTML);
    }

});

