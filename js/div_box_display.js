function div_box_display(){
    var div2 = document.createElement("div");
    div2.className = "long_play_btns";
    div2.id = "single_player";
    div2.title = "单人游戏/single player";

    var element4 = document.getElementById("demo");
    element4.appendChild(div2);

    var tag2 = document.createElement("p");
    tag2.className = "white";
    var text2 = document.createTextNode("单人游戏");
    tag2.appendChild(text2);
    var element3 = document.getElementById("single_player");
    element3.appendChild(tag2);

    var br = document.createElement("br");
    var element5 = document.getElementById("demo");
    element5.appendChild(br);

    var div3 = document.createElement("div");
    div3.className = "long_play_btns";
    div3.id = "multi_player";
    div3.title = "多人游戏/multi player";

    var element6 = document.getElementById("demo");
    element6.appendChild(div3);

    var tag3 = document.createElement("p");
    tag3.className = "white";
    var text3 = document.createTextNode("多人游戏");
    tag3.appendChild(text3);
    var element7 = document.getElementById("multi_player");
    element7.appendChild(tag3);

    var br0 = document.createElement("br");
    var element8 = document.getElementById("demo");
    element8.appendChild(br0);

    var div4 = document.createElement("div");
    div4.className = "long_play_btns";
    div4.id = "minecraft_realms";
    div4.title = "本地服务器/minecreaft realms";

    var element9 = document.getElementById("demo");
    element9.appendChild(div4);

    var tag4 = document.createElement("p");
    tag4.className = "white";
    var text4 = document.createTextNode("Mincraft realms");
    tag4.appendChild(text4);
    var element10 = document.getElementById("minecraft_realms");
    element10.appendChild(tag4);

    window.onload = div_box_display_2();
}