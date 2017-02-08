var hostURL = "https://hidden-tundra-33627.herokuapp.com/";
var articleRoot = $(".article-holder");

$(document).ready( function(){
    
    // Index
    if($("body").hasClass("index")) {

        $.get( hostURL + "api/articles", function( data ) {

            // Add to DOM
            for (var i = 0; i < data.data.length; i++) {

                var currArticle = data.data[i],
                    currArticleDOM = '<div class="col-sm-4 col-lg-4 col-md-4"><div class="thumbnail"><a href="./productDetail.html?id=' 
                                     + currArticle.id + '"><img src="';

                // Buildup article DOM
                // Picture
                currArticleDOM += hostURL + currArticle.picture_path + '" alt=""><div class="caption">';

                // Name
                currArticleDOM += '<h4><a href="./productDetail.html?id=' + currArticle.id + '">' + currArticle.name + '</a></h4>';

                // Price
                currArticleDOM += '<h4>' + currArticle.price + '€</h4></div></div>';

                // Finally add
                articleRoot.append(currArticleDOM);

                // Check responsive breaks
                if((i + 1) % 3 == 0) {
                    articleRoot.append('<div class="clearfix"></div>');
                }

            }
        });
    }

    // productDetail
    if($("body").hasClass("productDetail")) {
        
        var id = getUrlParameter("id");
        if(id) {
            $.get( hostURL + "api/articles/" + id, function( data ) {

                // Add to DOM
                var currArticle = data.data;
                    currArticleDOM = '<div class="row"><div class="col-md-12"><img class="image-detail img-responsive" src="';

                // Buildup article DOM
                // Picture
                currArticleDOM += hostURL + currArticle.picture_path + '" alt=""></div></div>';

                // Markup to prica and name
                currArticleDOM += '<div class="row"><div class="col-sm-12 col-md-offset-2 col-md-8">';

                // Name
                currArticleDOM += '<h1 class="main-headline">' + currArticle.name + '</h1>';

                // Price
                currArticleDOM += '<h4>' + currArticle.price + "€</h4>";

                // Description
                currArticleDOM += '<p>' + currArticle.description + '</p>';

                // Tail
                currArticleDOM += '</div></div>';

                // Finally add
                articleRoot.append(currArticleDOM);

                $(".button-holder").show();
            });
        } else {
            articleRoot.append("<img class='img-responsive text-center' src='img/no_id.jpg' />");
        }
    }
});

$("#deleteButton").on("click", function() {
    var id = getUrlParameter("id");
    var rootPageURL = document.location.pathname.split("productDetail")[0] + "index.html";

    $.ajax({
        url: hostURL + "api/articles/" + id,
        type: 'DELETE',
        success: function(result) {
           
            window.location.assign(rootPageURL);
        }
    });

});

var getUrlParameter = function getUrlParameter(sParam) {

    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};