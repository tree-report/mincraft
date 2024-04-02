function div_box_display_2(){
    var div6 = document.createElement("div");
    div6.className = "mini_play_btns";
    div6.id = "language_btn";
    div6.onclick = function(){
        alert("达咩!");
    }
    div6.title = "语言/language";

    var element12 = document.getElementById("demo_2");
    element12.appendChild(div6);

    var tag5 = document.createElement("img");
    tag5.className = "icon_png";
    tag5.src = "assets/image/language.png";
    tag5.alt = "Flie Error: can't Load the image";
    var element13 = document.getElementById("language_btn");
    element13.appendChild(tag5);

    var br_div = document.createElement("div");
    br_div.id = "distance1";
    br_div.className = "space_div";
    var element14 = document.getElementById("demo_2");
    element14.appendChild(br_div);

    var div7 = document.createElement("div");
    div7.className = "short_play_btns";
    div7.id = "sittings";
    div7.title = "设置/sittings";

    var element15 = document.getElementById("demo_2");
    element15.appendChild(div7);

    var tag6 = document.createElement("p");
    tag6.className = "white";
    var text6 = document.createTextNode("选项...");
    tag6.appendChild(text6);
    var element16 = document.getElementById("sittings");
    element16.appendChild(tag6);

    var br_div_1 = document.createElement("div");
    br_div_1.id = "distance2";
    br_div_1.className = "space_div";
    var element17 = document.getElementById("demo_2");
    element17.appendChild(br_div_1);

    var div8 = document.createElement("div");
    div8.className = "short_play_btns";
    div8.id = "exit_web";
    
    div8.title = "退出游戏/exit games";

    var element18 = document.getElementById("demo_2");
    element18.appendChild(div8);

    var tag8 = document.createElement("p");
    tag8.className = "white";
    var text8 = document.createTextNode("退出游戏");
    tag8.appendChild(text8);
    var element19 = document.getElementById("exit_web");
    element19.appendChild(tag8);

    var br_div0 = document.createElement("div");
    br_div0.id = "distance";
    br_div0.className = "space_div";
    var element20 = document.getElementById("demo_2");
    element20.appendChild(br_div0);

    var div9 = document.createElement("div");
    div9.className = "mini_play_btns";
    div9.id = "accessibility_btn";
    div9.onclick = function(){
        alert("达咩!");
    }
    div9.title = "辅助设置/assist sittings";

    var element21 = document.getElementById("demo_2");
    element21.appendChild(div9);

    var tag9 = document.createElement("img");
    tag9.className = "img_mini_div";
    tag9.src = "assets/";
    tag9.alt = "Flie Error: can't Load the image";
    var element22 = document.getElementById("accessibility_btn");
    element22.appendChild(tag9);
}