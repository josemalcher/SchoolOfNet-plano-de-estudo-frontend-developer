$(function () {

    var requestList = $.ajax({
        method:"GET",
        url:"post.php",
        data:{listAll:"list"},
        dataType:"json"
    });

    requestList.done(function(e){
        console.log(e);
    });


    $('#AjaxRequest').submit(function () {
        var form = $(this).serialize();
        //var formArray = $(this).serializeArray();

        //console.log(form);
        //console.log(formArray);

        var request = $.ajax({
            method: "POST",
            url: "post.php",
            data: form,
            dataType:"json",
        });

        request.done(function (e) {
            //console.log(e);
            $('#msg').html(e.msg);

            if(e.status){ // Caso haja erro, vai manter os dados, se OK vai limpar os campos
                $('#AjaxRequest').each(function () {
                    this.reset();
                });
            }

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