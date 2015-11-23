function validateInput() {

    var vorname = document.getElementById("vorname");
    var name = document.getElementById("nachname");
    var verein = document.getElementById("verein");
    var hcoach = document.getElementById("hcoach");
    var acoach = document.getElementById("acoach");
    var trikotnummer = document.getElementById("number");
    var geburtsjahr = document.getElementById("jahr");

    var first = true;
    var isValid = true;

    //validates text inputs
    checkInputName(vorname);
    checkInputName(name);
    checkInputName(verein);
    checkInputName(hcoach);
    checkInputName(acoach);

    //validates trikotnummer
    if (trikotnummer.value == "" || trikotnummer.value < 4 || trikotnummer.value > 15) {

        invalidInput(trikotnummer);
    } else {
        resetBorder(trikotnummer);
    }
    //validates geburtsjahr
    if (geburtsjahr.value == "" || geburtsjahr.value < 0 || geburtsjahr.value > (new Date().getFullYear())) {

        invalidInput(geburtsjahr);
    } else {
        resetBorder(geburtsjahr);
    }

    //check Validation of text input
    function checkInputName(input) {

        var value = input.value;
        var reg = new RegExp("^[a-zA-Z]+$");
        var result = value.search(reg);
        var invalid = result == -1;

        if (invalid) {
            invalidInput(input);
        } else {
            resetBorder(input);
        }
    }

    //in case the input was invalid, its style has to be reset
    function resetBorder(element) {
        element.style.border = "black solid thin";
    }

    //modifies Elements, when Input is invalid
    function invalidInput(input) {

        isValid = false;

        if (first) {
            input.focus();
            first = false;
        }
        input.style.border = "3px solid red";
    }

    if (!isValid) {
        alert('Einige Eingaben sind fehlerhaft. Bitte \xFCberpr\xFCfen Sie ihre Eingaben');
        return false;
    }

    //if everything was correct
    return true;

}
