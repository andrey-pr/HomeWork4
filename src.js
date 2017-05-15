/**
 * Created by Artem on 13.05.2017.
 */
document.getElementById("menu_button").onclick = function () {
    if(!document.getElementById("float_menu")) {
        var menu = document.createElement("div");
        menu.id = "float_menu";
        menu.classList.add("float_menu");
        menu.innerHTML = document.getElementById("screen_menu").innerHTML;
        // for(var i = 0; i < menu.childNodes.length; i++)
        // {
        //     console.log(menu.childNodes.item(i));
        //     console.log(menu.childNodes.item(i).classList);
        //     console.log(menu.childNodes.item(i).nodeName);
        //     if(menu.childNodes.item(i).nodeName == "A")
        //     menu.childNodes.item(i).classList.remove("link");
        // }
        document.body.appendChild(menu);
    }
    else
    {
        console.log(document.getElementById("float_menu"));
        document.body.removeChild(document.getElementById("float_menu"));
    }
};