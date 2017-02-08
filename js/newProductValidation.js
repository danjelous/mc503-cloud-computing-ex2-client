$("form").on("submit", function () {

    var $name = $("#name").val(),
        $description = $("#description").val(),
        $prize = $("#prize").val(),
        $alert = $("form .alert");

    if (!$name || !$description || !$prize || !parseInt($prize)) {
        console.log("true");
        // debugger;
        $alert.show();
        return false;
    } else {
        
        // Valid
    }
});
