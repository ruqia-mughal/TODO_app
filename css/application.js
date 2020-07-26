var addbutton = document.querySelector(".addbutton");
var input = document.querySelector(".input");
var container = document.querySelector(".container");

class item {
    constructor(itemName) {
        this.createDiv(itemName);

    }
    createDiv(itemName) {
        var input = document.createElement("input");
        input.value = itemName;
        input.disabled = true;
        input.classList.add("item_input");
        input.type = "text";

        var itembox = document.createElement("div");
        itembox.classList.add("item");

        var editbutton = document.createElement("button");
        editbutton.classList.add("editbutton");
        var eicon = document.createElement('i'); 
        eicon.setAttribute("class","far fa-edit ");
        editbutton.appendChild(eicon);

        var removebutton = document.createElement("button");
        var dicon = document.createElement('i');
        dicon.setAttribute("class","fa fa-trash")
        removebutton.appendChild(dicon);
        
        removebutton.classList.add("removebutton");
      
        container.appendChild(itembox);
        itembox.appendChild(input);
        itembox.appendChild(editbutton);
        itembox.appendChild(removebutton);

 

        editbutton.addEventListener("click", () => this.edit(input));
        removebutton.addEventListener("click", () => this.remove(itembox));

    };
   
    edit(e) {
        e.disabled = !e.disabled;
    }
    remove(i) {
        container.removeChild(i);

    }
}
function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";


    }

}
addbutton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
    if (e.which == 14) {

        check();
    }

})

function delall() {
    var w = document.getElementById("list");
    w.innerHTML = "";

}