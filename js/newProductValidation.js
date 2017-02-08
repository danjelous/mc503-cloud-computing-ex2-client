var hostURL = "https://hidden-tundra-33627.herokuapp.com/";

$(document).ready(function () {

    var $selectBox = $("form select");

    // Get image names
    $.get(hostURL + "api/articles", function (data) {


        for (var i = 0; i < data.data.length; i++) {

            // Add to selectBox
            $selectBox.append("<option style='background-image:url(" + hostURL + data.data[i].picture_path + ")';>" + data.data[i].picture_path + "</option>");
        }

    });
});

$("form").on("submit", function (e) {

    var $name = $("#name").val(),
        $description = $("#description").val(),
        $prize = $("#prize").val(),
        $form = $("form"),
        $alert = $form.find(".alert"),
        $picture_path = $form.find("select").val();

    if (!$name || !$description || !$prize || !parseInt($prize)) {

        $alert.show();
        return false;
    } else {

        // Valid - post to API

        var newData = {
            "picture_path": $picture_path,
            "name": $name,
            "description": $description,
            "price": parseFloat($prize)
        };

        var rootPageURL = document.location.pathname.split("newProduct")[0] + "index.html";

        $.ajax({
            type: "POST",
            url: hostURL + "api/articles",
            data: newData,
            success: function(data){
               window.location.assign(rootPageURL);
           }
        });

        e.preventDefault();
    }
});
