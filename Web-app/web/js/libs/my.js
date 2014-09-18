var url = "./../../Web-ser/";

showLookup();
function showLookup() {
    console.log("showLookup");
    $('.showLookup').html(function () {
        var el = $(this);
        var txt = el.html().trim();
        var result = "";
        var item = el.attr("itemid");
        el.empty();
        var tmp = txt.replace(/\"/g, "\\'");
        tmp = tmp.replace(/\[/g, '" + this.');
        tmp = tmp.replace(/]/g, ' + "');
        $.getJSON(url + item + "/query", function (data) {
            el.attr("size", Object.keys(data).length);
            $.each(data, function () {


                tmp = eval("\"" + tmp + "\"");

                result += tmp;
            });
            el.empty();
            el.html(result);
        });
    });
}

$(document).ready(function () {

    $('.editAble').find("input").on("focusout", function () {
        console.log($(this).text());
        console.log("out");
    });
});

setTimeout(function () {
    $('.editAble').on("click", function () {

        $(this).html('<input type="text" value="' + $(this).text() + '" />');
        $(this).find("input").focus();
    });
}, 100);

function del(item, pk) {
    $.get(url + item + "/delete", {"pk": pk}, function (data) {
        showLookup();
        console.log(data);
    });
}