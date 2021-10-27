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

check1 = box1.checked;
    if (check1 == true) {
        axy= "x";
    }
    else {
        axy= "y";
    }


var txt1Value, txt2Value, txt3Value;
var datos = [];
var datos_object = [];

var base_de_datos = [
    datos,
    datos_object,
]
var i = 0;

var datoID, largo_datos;
var magnitud1, magnitud2, magnitud3, datoID;

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

    datos = [
        mag1_date1,
        mag2_date1,
        mag3_date1, 

        mag1_date2, 
        mag2_date2,
        mag3_date2,
    ];

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

    for (let i = 0; i < datos_object.length-1; i++) {
        var element = datos_object[i];
        if (element.valor2 === "x") {
            datoID = i;
            console.log("el dato con la x es: " + element.valor2 + " y i es: " + i);
        } else {
            console.log("el dato sin la x es: " + element.valor2 + " y i es: " + i);
        }
    }

}

function operaciones() {
    
}
