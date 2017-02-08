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

});