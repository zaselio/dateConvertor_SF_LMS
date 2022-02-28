//global var
var globalArrayDate = [];
var globalArryDdateCovnert = [];
var bulk = [];
var nothing = "";

function bulkFunc() {
    var myDate = document.getElementById("date").value;
    bulk = myDate.split(" ");
    for (i = 0; i < bulk.length; i++) {
        myDate = bulk[i];
        validation(myDate, i);
    }
    var myDate = document.getElementById("date").value = "";
}

function validation(myDate,i) {

        //this will make sure there is string inside the field//
        if (myDate == nothing) {
            alert("paste a date");
            return;
        }

        //this will make sure your template is correct//
        if (myDate.length > 10 || myDate.length < 10) {
            if (myDate.length > 10) {
                alert("date length is to damn long!" + " cheack date number " + [i+1]);
                return;
            }
            if (myDate.length < 10) {
                alert("date length is to damn short!" + " cheack date number " + [i + 1]);
                return;
            }
        }
        if (!(myDate[2] == "/") || !(myDate[5] == "/")) {
            alert("wrong date template! there should be / in your 3rd & 5th date position" + " cheack date number " + [i + 1]);
            return;
    }

        for (x = 0; x < myDate.length; x++) {
            if (x == 2 || x == 5) {
                x++;
            }
            else {
                if (isNaN(myDate[x])) {
                    alert("all date digits must be numbers!" + " cheack date number " + [i + 1]);
                    return;
                }
            }
        }

        //this will make sure your date YEAR format is correct//
        var minYear = 1900;
        var tempNum = myDate[6] + myDate[7] + myDate[8] + myDate[9];
        if (tempNum < minYear) {
            alert("year must be higher then 1900" + " cheack date number " + [i + 1]);
            return;
        }

        //this will make sure your date MONTH format is correct//
        if (myDate[0] + myDate[1] == 0 || myDate[0] >= 2 || myDate[0] == 1 && myDate[1] >= 3) {
            alert("month must be between 01 to 12" + " cheack date number " + [i + 1]);
            return;
        }

        //this will make sure your date DAY format is correct//
        if (myDate[3] + myDate[4] == 0 || myDate[3] >= 4 || myDate[3] == 3 && myDate[4] >= 2) {
            alert("day must be between 01 to 31" + " cheack date number " + [i + 1]);
            return;
        }

        //all is good with your input//
    globalArrayDate.push(myDate);
    }
function convert() {
    if (!(globalArrayDate.length > 0)) {
        alert("there is/are no date/s for me to convert");
    }
    else {
        document.getElementById("results").innerHTML = "";
        for (i = 0; i < globalArrayDate.length; i++) {
            if (globalArrayDate[i].charAt(0) == 1 && globalArrayDate[i].charAt(1) == 1) {
                document.getElementById("results").innerHTML += "NOV" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
            }
            else if (globalArrayDate[i].charAt(0) == 1 && globalArrayDate[i].charAt(1) == 2) {
                document.getElementById("results").innerHTML += "DEC" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
            }
            else if (globalArrayDate[i].charAt(0) == 1 && globalArrayDate[i].charAt(1) == 0) {
                document.getElementById("results").innerHTML += "OCT" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
            }
            else {
                if (globalArrayDate[i].charAt(0) == 0) {
                    if (globalArrayDate[i].charAt(1) == 1) {
                        document.getElementById("results").innerHTML += "JAN" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 2) {
                        document.getElementById("results").innerHTML += "FEB" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 3) {
                        document.getElementById("results").innerHTML += "MAR" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 4) {
                        document.getElementById("results").innerHTML += "APR" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 5) {
                        document.getElementById("results").innerHTML += "MAY" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 6) {
                        document.getElementById("results").innerHTML += "JUN" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 7) {
                        document.getElementById("results").innerHTML += "JUL" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 8) {
                        document.getElementById("results").innerHTML += "AUG" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                    else if (globalArrayDate[i].charAt(1) == 9) {
                        document.getElementById("results").innerHTML += "SEP" + "-" + globalArrayDate[i].charAt(3) + globalArrayDate[i].charAt(4) + "-" + globalArrayDate[i].charAt(6) + globalArrayDate[i].charAt(7) + globalArrayDate[i].charAt(8) + globalArrayDate[i].charAt(9) + " " + "00:00:00" + "<br>";
                    }
                }
            }
        }
    }
    globalArrayDate = [];
    globalArryDdateCovnert = [];
}

function cleanUp() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("date").value="";
    return;
}

//© 2021 Zohar Volokita All Rights Reserved