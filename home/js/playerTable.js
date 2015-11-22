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
    var playerList = request.getAllResponseHeaders();
    return playerList;
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

    for (var zeile = 0; zeile < 10; zeile++) {
        row = document.createElement("tr");
        for (var spalte = 0; spalte < 8; spalte++) {
            if (zeile == 0) {
                cell = document.createElement("th");
                cell.setAttribute("colspan", "4");
                if (spalte == 0) {
                    text = document.createTextNode("Alle Spieler");
                    cell.setAttribute("id", "tableTabAlleSpieler");
                }
                if (spalte == 4) {
                    text = document.createTextNode("Meine Favoriten");
                    cell.setAttribute("id", "tableTabMeineFavoriten");
                }
            }
            if (zeile == 1) {
                text = document.createTextNode(attributList[spalte]);
                cell.setAttribute("class", "tableAttribute");
            } else {
                cell = document.createElement("td");
                cell.setAttribute("class","tableData");
            }
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tablebody.appendChild(row);
    }

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
