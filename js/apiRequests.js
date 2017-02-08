var apiURL = "https://hidden-tundra-33627.herokuapp.com/api/";

$(document).ready( function(){
    
    // Index
    if($("body").hasClass("index")) {
        $.get( apiURL + "articles", function( data ) {

            // Add to DOM
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
            }

            //   article-holder
        });
    }

});


    /*        <div class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                    <img src="http://placehold.it/320x150" alt="">
                    <div class="caption">
                        <h4 class="pull-right">$24.99</h4>
                        <h4><a href="#">First Product</a>
                        </h4>
                        <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                    </div>
                    <div class="ratings">
                        <p class="pull-right">15 reviews</p>
                        <p>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                        </p>
                    </div>
                </div>
            </div>*/