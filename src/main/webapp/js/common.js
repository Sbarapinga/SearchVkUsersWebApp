/**
 * Created by Pavel on 08.03.2017.
 */

document.getElementById("input-groups").onclick = function (e) {
    var target = e.target;

    if (!target.classList.contains("delete-group") || this.childElementCount <= 1) return;

    removeParentByClass(target, "group")
};

document.getElementById("add-group").onclick = function(e) {
    var elem = document.createElement("div");
    elem.className = "form-group row group";
    elem.innerHTML = "<div class=\"col-md-4\">" +
        "<input type=\"text\" class=\"form-control\" placeholder=\"Введите id группы. Пример: club123421\">" +
        "</div><div class=\"col-md-2 button-wrap\">" +
        "<button type=\"button\" class=\"btn btn-primary delete-group\">Удалить</button>" +
        "</div>";

    document.getElementById("input-groups").appendChild(elem)
};

document.getElementById("add-group").click();


function removeParentByClass(elem, className) {
    while ((elem = elem.parentNode) != null) {
        if (elem.classList.contains(className)) {
            elem.remove();
            return;
        }
    }
}