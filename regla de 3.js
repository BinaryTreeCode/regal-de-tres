var txt1 = document.getElementById("magnitud 1");
var txt2 = document.getElementById("magnitud 2");
var txt3 = document.getElementById("magnitud 3");

var dato1 = document.getElementById("magnitud1_dato1");
var dato2 = document.getElementById("magnitud2_dato1");
var dato3 = document.getElementById("magnitud3_dato1");
var dato4 = document.getElementById("magnitud1_dato2");
var dato5 = document.getElementById("magnitud2_dato2");
var dato6 = document.getElementById("magnitud3_dato2");

var box1 = document.getElementById("check-box1");
var box2 = document.getElementById("check-box2");
var box3 = document.getElementById("check-box3");




var txt1Value, txt2Value, txt3Value;
var datos_object = [];

var i = 0;

var datoID, largo_datos;
var magnitud1, magnitud2, magnitud3;

var nombre1 = document.getElementById("text_conainer1");
var nombre2 = document.getElementById("text_conainer2");
var nombre3 = document.getElementById("text_conainer3");

function fuciones() {
    sumit ();
    nombre();
}

function nombre() {
    nombre1.value = txt1Value;
    nombre2.value = txt2Value;
    nombre3.value = txt3Value;
}

function sumit () {
    txt1Value = txt1.value;
    txt2Value = txt2.value;
    txt3Value = txt3.value;  

    mag1_date1 = dato1.value;
    mag2_date1 = dato2.value;
    mag3_date1 = dato3.value;

    mag1_date2 = dato4.value;
    mag2_date2 = dato5.value;
    mag3_date2 = dato6.value;

    magX = {
        date1: parseInt(mag1_date1),
        date2: parseInt(mag1_date2),
    };

    check2 = box2.checked;
    if (check2 == true) {
        datosMag2 = {
            date1: parseInt(mag2_date2),
            date2: parseInt(mag2_date1),
        };
    }
    else {
        datosMag2 = {
            date1: parseInt(mag2_date1),
            date2: parseInt(mag2_date2),
        };
    }

    check3 = box3.checked;
    if (check3 == true) {
        datosMag3 = {
            date1: parseInt(mag3_date2),
            date2: parseInt(mag3_date1),
        }
    }
    else {
        datosMag3 = {
            date1: parseInt(mag3_date1),
            date2: parseInt(mag3_date2),
        }
        }

    magnitud1 = {
        valor1: mag1_date1,
        valor2: mag1_date2 
    };

    magnitud2 = {
        valor1: mag2_date1,
        valor2: mag2_date2
    };

    magnitud3 = {
        valor1: mag3_date1,
        valor2: mag3_date2
    };

    datos_object = [
        magnitud1,
        magnitud2,
        magnitud3
    ];
}

var resultado;
function operaciones() {
    var farci??n1 = datosMag2.date1 * datosMag3.date1;
    var farci??n2 = datosMag2.date2 * datosMag3.date2;
    var multiplicaci??n = farci??n2 * magX.date1;
    var divici??n =  multiplicaci??n / farci??n1;
    return resultado = divici??n;
}

var result_ipunt = document.getElementById("resultado");
function iprimir() {
    result_ipunt.innerHTML = "el resultado es = " + resultado + " " + txt1Value;
}