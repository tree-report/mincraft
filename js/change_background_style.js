function change_background_style(){
    var div_change = document.getElementById("mian");
    document.getElementById("mian").style.backgroundColor = "rgba(255,255,255,0)";
    document.getElementById("mian").style.backgroundImage = 'url("assets/image/background1.png")';
    document.getElementById("mian").className = "mian_background_style";

    setTimeout("start_display()",0);
}