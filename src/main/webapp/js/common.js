/**
 * Created by Pavel on 08.03.2017.
 */

document.getElementById("input-groups").onclick = function (e) {
    var target = e.target;

    if (!target.classList.contains("delete-group") || this.childElementCount <= 1) return;

    var input = target.parentNode.parentNode.children[0].children[0];

    clearIntervalOnTarget(input);
    removeParentByClass(target, "group")
};

document.getElementById("input-groups").onkeyup = function (e) {
    var target = e.target;

    clearIntervalOnTarget(target);

    if (!target.classList.contains("input-group")) return;

    var text = target.value.trim();
    if (text.length == 0) return;

    text = sendGet('/xhr/group?group=' + encodeURIComponent(text));

    var label = getLabelDOM(target);
    var maxNameLength = 50;
    var offset = maxNameLength - text.length;

    if (offset >= 0) {
        label.innerHTML = text;
        return;
    }

    var currOffset = 0;
    target.interval = setInterval(function(){
        label.innerHTML = text.substr(currOffset++ % offset, maxNameLength);
    }, 200);
};

document.getElementById("add-group").onclick = function(e) {
    var elem = document.createElement("div");
    elem.className = "form-group row group";
    elem.innerHTML = "<div class=\"col-md-4\">" +
        "<input type=\"text\" name=\"group\" class=\"form-control input-group\" placeholder=\"Введите id группы. Пример: club123421\">" +
        "</div><div class=\"col-md-2 button-wrap\">" +
        "<button type=\"button\" class=\"btn btn-primary delete-group\">Удалить</button>" +
        "</div><div class=\"col-md-4 label-group\"></div>";

    document.getElementById("input-groups").appendChild(elem);
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

function sendGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    return xhr.responseText;
}

function getLabelDOM(inputGroup) {
    var parent = inputGroup.parentNode.parentNode;
    var size = parent.children.length;
    return parent.children[size - 1];
}

function clearIntervalOnTarget(target) {
    if (target.interval != undefined) {
        clearInterval(target.interval);
        target.interval = undefined;
    }
}