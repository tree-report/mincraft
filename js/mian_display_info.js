function mian_display_info(){
    
var div1 = document.createElement("div");
div1.className = "info_div_style";
div1.id = "information";

var element = document.getElementById("mian");
element.appendChild(div1);

var tag = document.createElement("span");
tag.id = "info";
tag.className = "white";    
var text = document.createTextNode("WebGL minecraft 1.16.5 By nike yuanxi ma");
tag.appendChild(text);

var element1 = document.getElementById("information");
element1.appendChild(tag);

var tag1 = document.createElement("span");
tag1.id = "Copyright";
tag1.className = "white";
tag1.style.float = "right";
var text1 = document.createTextNode("None copyRight, Wellcome to learn from!");
tag1.appendChild(text1);

var element2 = document.getElementById("information");
element2.appendChild(tag1);

setTimeout("div_box_display()",0);
}