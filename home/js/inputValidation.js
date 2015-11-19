                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            function validateInput() {

    var vorname = document.getElementById("vorname");
    var name = document.getElementById("nachname");
    var verein = document.getElementById("verein");
    var hcoach = document.getElementById("hcoach");
    var acoach = document.getElementById("acoach");
    var trikotnummer = document.getElementById("number");
    var geburtsjahr = document.getElementById("jahr");


    if (trikotnummer.value == "" || trikotnummer.value < 4 || trikotnummer.value > 15) {

        invalidInput(trikotnummer);
    }

    if (!geburtsjahr.match(/^\d{4}/)){

        invalidInput(geburtsjahr);

    }

    checkInputName(vorname);
    checkInputName(name);
    checkInputName(verein);
    checkInputName(hcoach);
    checkInputName(acoach);


    function checkInputName(String){

        if (!String.match(/^[a-zA-Z]+$/)) {
            invalidInput(String);

        }
    }

    function invalidInput(String) {

        alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
        document.getElementById(String).focus();
        return false;
    }
}