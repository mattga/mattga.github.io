$(document).ready(function(){

    var eddirating = $('#eddirating');
    var ssrating = $('#ssrating');
    var isocrating = $('#isocrating');
    var fxfrating = $('#5x5rating');
    var mgchrating = $('#mgchrating');
    var mgaurating = $('#mgaurating');

    function setStars(el, stars) {
        for (i = 0; i < Math.floor(5-stars); i++) {
            el.prepend('<i class="stars fa fa-star-o" aria-hidden="true"></i>');
        }
        if (stars != Math.floor(stars)) {
            el.prepend('<i class="stars fa fa-star-half-o" aria-hidden="true"></i>');
        }
        for (i = 0; i < Math.floor(stars); i++) {
            el.prepend('<i class="stars fa fa-star" aria-hidden="true"></i>');
        }
    }

    $.getJSON("https://itunes.apple.com/lookup?id=787642888&callback=?", function(json) {
        if (json && json.results[0].userRatingCount){
            eddirating.prepend('<h6>'+json.results[0].userRatingCount+'</h6>');
            setStars(eddirating, json.results[0].averageUserRating)
        }
    });

    $.getJSON("https://itunes.apple.com/lookup?id=885673803&callback=?", function(json) {
        if (json && json.results[0].userRatingCount){
            ssrating.prepend('<h6>'+json.results[0].userRatingCount+'</h6>');
            setStars(ssrating, json.results[0].averageUserRating)
        }
    });

    $.getJSON("https://itunes.apple.com/lookup?id=1009637467&callback=?", function(json) {
        if (json && json.results[0].userRatingCount){
            isocrating.prepend('<h6>'+json.results[0].userRatingCount+'</h6>');
            setStars(isocrating, json.results[0].averageUserRating)
        } else {
            isocrating.prepend('<h6>0</h6>');
            setStars(isocrating, 0)
        }
    });

    fxfrating.prepend('<h6>5</h6>');
    setStars(fxfrating, 4);    

    $.getJSON("http://metrics.cocoapods.org/api/v1/pods/MGCollapsingHeader.json", function(json) {
        console.log(json);
        if (json) {
            mgchrating.prepend('<i class="stars fa fa-star" aria-hidden="true"></i>');
            mgchrating.prepend('<h6>'+json.github.stargazers+'</h6>');
            mgchrating.prepend('<i class="stars fa fa-download" aria-hidden="true"></i>');
            mgchrating.prepend('<h6>'+json.stats.download_total+'</h6>');
        }
    });

    $.getJSON("http://metrics.cocoapods.org/api/v1/pods/MGAlertUtility.json", function(json) {
        console.log(json);
        if (json) {
            mgaurating.prepend('<i class="stars fa fa-star" aria-hidden="true"></i>');
            mgaurating.prepend('<h6>'+json.github.stargazers+'</h6>');
            mgaurating.prepend('<i class="stars fa fa-download" aria-hidden="true"></i>');
            mgaurating.prepend('<h6>'+json.stats.download_total+'</h6>');
        }
    });
});