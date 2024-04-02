function start_display(){
    var div = document.getElementById("index");
    index.className = "mian_style_start";

    var img_change = document.getElementById("brand_logo");
    brand_logo.src = "assets/image/minecraft.png";
    brand_logo.className = "img_style_minecraft";

    var yellow_text = document.createElement("p");
    yellow_text.id = "yellow_text";
    yellow_text.className = "yellow_text";    
    var yellow_text_node = document.createTextNode("yuanxi.ma@merchiston.cn");
    yellow_text.appendChild(yellow_text_node);
    yellow_text.title = "站长邮箱/email of the proggramer of this website";

    var element_yellow_text = document.getElementById("index");
    element_yellow_text.appendChild(yellow_text);

    var img_java = document.createElement("img");
    img_java.src = "assets/image/edition.png";
    img_java.alt = "Flie Error: can't Load the edition.png";
    var element0 = document.getElementById("brand");
    element0.appendChild(img_java);

    var div_1 = document.createElement("div");
    div_1.className = "play_btn_div";
    div_1.id = "demo";
    
    var element_1 = document.getElementById("index");
    element_1.appendChild(div_1);

    var div5 = document.createElement("div");
    div5.id = "space";
    div5.style.height = "50px";
    div5.style.width = "1100px";

    var element11 = document.getElementById("index");
    element11.appendChild(div5);

    var div0 = document.createElement("div");
    div0.className = "play_btn_div_sp";
    div0.id = "demo_2";
    
    var element = document.getElementById("index");
    element.appendChild(div0);

    var progress1 = document.getElementById("progress_index");
    progress_index.style.display = "none";

    setTimeout("mian_display_info()",0);
}