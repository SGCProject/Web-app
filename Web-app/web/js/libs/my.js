var url = "./../../Web-ser/";

$('.showLookup').html(function () {
    var el = $(this);
    var txt = el.html().trim();
    var result = "";
    var item = el.attr("itemid");
    el.empty();
    $.getJSON(url + item + "/query", function (data) {
        el.attr("size", Object.keys(data).length);
        $.each(data, function () {
            var tmp = txt.replace(/\"/g, "\\'");
            tmp = tmp.replace(/\[/g, '" + this.');
            tmp = tmp.replace(/]/g, ' + "');

            tmp = eval("\"" + tmp + "\"");

            result += tmp;
        });
        el.html(result);
    });
});

$('.editAble').find("input").on("focusout", function () {
    console.log($(this).text());
    console.log("out");
});



setTimeout(function () {
    $('.editAble').on("click", function () {

        $(this).html('<input type="text" value="' + $(this).text() + '" />');
        $(this).find("input").focus();
    });
}, 100);