function toast(pos){
    var msg = $("#msg").val();
    $("#notif-area").append("<div class='notif "+pos+"'>"+msg+"</div>");
    $(".notif").fadeIn(400).delay(2000).fadeOut(400,function(){
        $("#notif-area").empty();
    });
}
