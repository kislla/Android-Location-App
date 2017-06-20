$(document).ready(function () {
    takeJson();
});

function takeJson() {
    var $table = $("<table class='main table table-bordered table-hover'></table>");
    $.getJSON("https://tamirkapara.000webhostapp.com/location/showLocations.php", {}, function (json) {
        getTableHeader(json, $table);
    });
}

function getTableHeader(json, $table) {
    var $header1 = $("<thead></thead>");
    var $header = $("<tr></tr>");
    $.each(json.Locations[0], function (item) {
        $header.append($("<th></th>").text(item));
        if (item === "date") {
            $header.append($("<th></th>").text("Link"));
        }
    });
    $header1.append($header);
    $table.append($header1);

    $table.append("<tbody>");
    getTable(json, $table);
}

function getTable(json, $table) {
    json.Locations.forEach(function (item) {
        getTableData(item, $table);
    });
    $table.append("</tbody>");
    $('.main').html($table);
}


function getTableData(item, $table) {
    var link = "";
    var $row = $("<tr></tr>");
    $.each(item, function (key, val) {
        $row.append($("<td></td>").text(val));
        if (key === "latitude") {
            link += val + ",";
        } else if (key === "longitude") {
            link += val;
        }
    });
    $row.append($('<td><a href=http://maps.google.com/maps?q=' + link + '><button title="map" onClick="clickBtn()" type="button">Map</button></a></td>'));
    $table.append($row);
}


function clickBtn() {
    alert("Go To Google Maps");
}