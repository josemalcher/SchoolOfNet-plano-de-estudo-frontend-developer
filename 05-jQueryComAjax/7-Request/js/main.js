$(function () {
    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "GET",
            url: "post.php",
            data: form,
            dataType:"json",
        });

        request.done(function (e) {
            console.log("DONE");
            console.log(e);
        });

        request.fail(function (e) {
            console.log("FAIL!!");
            console.log(e);
        });

        request.always(function (e) {
            console.log("ALWAYS");
            console.log(e);
        });

        return false;
    });
});