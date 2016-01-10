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

function getDataFromRequest(favorites) {
    var request = new XMLHttpRequest();

    if (favorites) {
        var url = "http://127.0.0.1:8888/Favorites";

    } else {
        var url = "http://127.0.0.1:8888/AllPlayers";
    }

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
    cell.setAttribute("onclick", "select(id)");
    cell.appendChild(text);
    row.appendChild(cell);

    //Tab "Meine Favoriten"
    cell = document.createElement("th");
    text = document.createTextNode("Meine Favoriten");
    cell.setAttribute("id", "tableTabMeineFavoriten");
    cell.setAttribute("colspan", "4");
    cell.setAttribute("onclick", "select(id)");
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

    getDataFromRequest(false);

    table.appendChild(tableheader);
    table.setAttribute("ID", "favoriteTable");
    return table;
}

function loadData(playerList) {


    var tbody = document.getElementsByTagName("tbody");
    if (tbody.length != 0) {
        document.getElementsByTagName("tbody")[0].remove();
    }
    var body = document.createElement("tbody");

    for (var rowcounter = 0; rowcounter < playerList.length; rowcounter++) {
        var row = document.createElement("tr");

        var text = [];
        text[0] = document.createTextNode(playerList[rowcounter]["firstname"] + " " + playerList[rowcounter]["surname"]);
        text[1] = document.createTextNode(playerList[rowcounter]["team"]);
        text[2] = document.createTextNode(playerList[rowcounter]["headcoach"]);
        text[3] = document.createTextNode(playerList[rowcounter]["asisstantcoach"]);
        text[4] = document.createTextNode(playerList[rowcounter]["position"]);
        text[5] = document.createTextNode(playerList[rowcounter]["isActive"]);
        text[6] = document.createTextNode(playerList[rowcounter]["number"]);
        text[7] = document.createTextNode(playerList[rowcounter]["year"]);

        for (var colcounter = 0; colcounter < 8; colcounter++) {

            var cell = document.createElement("td");
            cell.setAttribute("class", "tableData");

            cell.appendChild(text[colcounter]);
            row.appendChild(cell);
        }

        //Showing all cells
        body.appendChild(row);

    }
    return body;
}

function select(id) {

    var tab = document.getElementById(id);

    tab.classList.add("selected");
    if (id == "tableTabAlleSpieler") {
        document.getElementById("tableTabMeineFavoriten").classList.remove("selected");
        getDataFromRequest(false);
    } else {
        document.getElementById("tableTabAlleSpieler").classList.remove("selected");
        getDataFromRequest(true);
    }

}