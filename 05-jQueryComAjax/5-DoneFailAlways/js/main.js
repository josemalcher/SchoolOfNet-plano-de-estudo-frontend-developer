$(function () {
    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "GET",
            url: "post.php",
            data: form
        });

        request.done(function (e) {
            console.log(e);
        });

        request.fail(function (e) {
            console.log(e);
        });

        request.always(function (e) {
            console.log(e);
        });

        return false;
    });
});