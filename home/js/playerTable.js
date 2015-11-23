function loadSite() {

    var heading = loadHeading();
    var table = loadTable();
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

function getDataFromRequest() {
    var request = new XMLHttpRequest();
    var url = "../data.json";
    var pList;
    request.onreadystatechange = function requestReadyStateHandler() {
        if (request.readyState == 4 && request.status == 200) {
            pList = JSON.parse(request.responseText);
            document.getElementsByTagName("table")[0].appendChild(loadData(pList));
        }
    };
    request.open("GET", url, true);
    request.send();
}

function loadTable() {

    var attributList = ["Spieler", "Verein", "Headcoach", "Assistantcoach", "Position", "Aktiv", "R\xFCckennummer", "Geburtsjahr"];

    var table = document.createElement("table");
    var tableheader = document.createElement("thead");
    var tablebody = document.createElement("tbody");
    var row;
    var cell;
    var text;


    //Tab Alle Spieler
    row = document.createElement("tr");
    cell = document.createElement("th");
    text = document.createTextNode("Alle Spieler");
    cell.setAttribute("id", "tableTabAlleSpieler");
    cell.setAttribute("colspan", "4");
    cell.setAttribute("class", "selected");
    cell.appendChild(text);
    row.appendChild(cell);

    //Tab "Meine Favoriten"
    cell = document.createElement("th");
    text = document.createTextNode("Meine Favoriten");
    cell.setAttribute("id", "tableTabMeineFavoriten");
    cell.setAttribute("colspan", "4");
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

    tableheader.setAttribute("id", "tableheader");
    tablebody.setAttribute("id", "tablebody");

    getDataFromRequest();

    table.appendChild(tableheader);
    table.setAttribute("ID", "favoriteTable");
    return table;
}

function loadData(playerList) {

    var body = document.createElement("tbody");

    for (var zeile = 0; zeile < playerList.length; zeile++) {
        var row = document.createElement("tr");
        for (var spalte = 0; spalte < 8; spalte++) {

            var cell = document.createElement("td");
            cell.setAttribute("class", "tableData");
            var text;

            switch (spalte) {
                case 0:
                    text = document.createTextNode(playerList[zeile]["firstname"] + " " + playerList[zeile]["surname"]);
                    break;
                case 1:
                    text = document.createTextNode(playerList[zeile]["team"]);
                    break;
                case 2:
                    text = document.createTextNode(playerList[zeile]["headcoach"]);
                    break;
                case 3:
                    text = document.createTextNode(playerList[zeile]["asisstantcoach"]);
                    break;
                case 4:
                    text = document.createTextNode(playerList[zeile]["position"]);
                    break;
                case 5:
                    if(playerList[zeile]["isActive"] == true) {
                        text = document.createTextNode("ja");
                    }else{
                        text = document.createTextNode("nein");
                    }
                    break;
                case 6:
                    text = document.createTextNode(playerList[zeile]["number"]);
                    break;
                case 7:
                    text = document.createTextNode(playerList[zeile]["year"]);
                    break;
            }
            cell.appendChild(text);
            row.appendChild(cell);
        }
        body.appendChild(row);

    }

    return body;

}