/**
 * Created by Miguel on 21.11.2015.
 */
function loadSite() {

    var heading = loadHeading();
    var table = loadTable();
    //var tableHeader = loadTableHeader();
    document.getElementById("center").appendChild(heading);
    document.getElementById("center").appendChild(table);
}

function loadHeading() {

    var heading = document.createElement("h1");
    var title = document.createTextNode("Meine Spieler");
    heading.setAttribute("class", "version2");
    heading.setAttribute("id", "heading");
    heading.appendChild(title);

    return heading;
}

function loadTableHeader() {
    var header = document.createElement("th");

}

function getPlayerList() {
    var request = new XMLHttpRequest();
    var url = "martinakraus.net/data.json";
    var pList;

    request.onreadystatechange = function requestReadyStateHandler() {
        if (request.readyState == 4 && request.status == 200) {
            pList = JSON.parse(request.responseText);

            return pList;
        }
    };
    request.open("GET", url, true);
    request.send();
    return pList;
}

function loadTable() {

    var attributList = ["Spieler", "Verein", "Headcoach", "Assistantcoach", "Position", "Aktiv", "Rückennummer", "Geburtsjahr"];

    var table = document.createElement("table");
    var tableheader = document.createElement("thead");
    var tablebody = document.createElement("tbody");
    var row;
    var cell;
    var text;

    var playerList = getPlayerList();

    //Tab Alle Spieler
    row = document.createElement("tr");
    cell = document.createElement("th");
    text = document.createTextNode("Alle Spieler");
    cell.setAttribute("id", "tableTabAlleSpieler");
    cell.setAttribute("colspan", "4");
    cell.appendChild(text);
    row.appendChild(cell);

    //Tab "Meine Favoriten"
    cell = document.createElement("th");
    text = document.createTextNode("Meine Favoriten");
    cell.setAttribute("id", "tableTabMeineFavoriten");
    //cell.setAttribute("colspan", "4");
    cell.appendChild(text);
    row.appendChild(cell);

    tableheader.appendChild(row);

    //Attributliste laden
    row = document.createElement("tr");

    for (var attributeCounter = 0; attributeCounter < 8; attributeCounter++) {
        cell = document.createElement("th");
        text = document.createTextNode(attributList[attributeCounter]);
        cell.setAttribute("class", "tableAttribute");
        cell.appendChild(text);
        row.appendChild(cell);
    }

    tableheader.appendChild(row);

    for (var zeile = 0; zeile < 8; zeile++) {
        row = document.createElement("tr");
        for (var spalte = 0; spalte < 8; spalte++) {

            cell = document.createElement("td");
            cell.setAttribute("class", "tableData");
        }
        cell.appendChild(text);
        row.appendChild(cell);
    }

    tablebody.appendChild(row);

    tableheader.setAttribute("id", "tableheader");
    tablebody.setAttribute("id", "tablebody");
    table.appendChild(tableheader);
    table.appendChild(tablebody);
    table.setAttribute("ID", "favoriteTable");
    return table;
}

/*function loadTable(row, col, id) {

 /* var myTable = document.createElement("table");
 var mytablebody = document.createElement("tbody");

 for (var j = 0; j < row; j++) {
 mycurrent_row = document.createElement("tr");
 for (var i = 0; i < col; i++) {
 mycurrent_cell = document.createElement("td");
 currenttext = document.createTextNode("row" + j + ", column " + i);
 mycurrent_cell.appendChild(currenttext);
 mycurrent_row.appendChild(mycurrent_cell);
 }

 mytablebody.appendChild(mycurrent_row);
 }

 myTable.appendChild(mytablebody);
 myTable.setAttribute("ID", id);
 return myTable;
 }*/
