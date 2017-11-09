$(function(){
    $('#AjaxRequest').submit(function(){

        var request = $.ajax({
            method:"GET",
            uri:"post.php",
            data:{
                name: $(':input[name=name]'.val()),
                email: $(':input[name=email]'.val()),
                tel: $(':input[name=tel]'.val())
            }
        });

        return false;
    });
});