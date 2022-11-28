/* CALCULADORA DE SALDOS */

//OBJETIVO: Una aplicación que calcule, a partir de un saldo inicial, los movimientos diferenciando entre Ingreso y Egreso (Condicional). Se podrán cargar diversos movimientos (Ciclo) hasta dar por finalizada la carga. Luego, el programa entregará una lista de movimientos, una suma de Ingresos, una suma de Egresos y el Saldo Final.

//Fecha y Saldo Inicial
let fechaInicial = prompt("Escriba la fecha Inicial en el siguiente formato: dd/mm/aaaa");
let saldoInicial = parseFloat(prompt("Escriba el saldo Inicial: "));
console.log("Saldo inicial: " + fechaInicial + " --> $" + saldoInicial);

//Tipo de Movimiento
let tipoMov = prompt("Escriba el tipo de movimiento. Si es un Ingreso escriba '1', si es un Egreso escriba '2'. Para finalizar la carga de datos escriba 'fin'. ");
//Variables
let fechaMovIng = 0;
let movIng = 0;
let motIng = 0;
let fechaMovEgr = 0;
let movEgr = 0;

//Switch para elegir entre ingreso y egreso:
while (tipoMov != "fin"){
    switch (tipoMov){
        case "1":
            fechaMovIng = prompt("Escriba la fecha del movimiento en el siguiente formato: dd/mm/aaaa");//Agregar Validación de fechas.
            movIng = parseFloat(prompt("Escriba el valor de Ingreso: "));
            while(isNaN(movIng)){
                movIng = parseFloat(prompt("Solo se permiten números. Escriba el valor de Ingreso: "));
            };
            // Incluir un condicional para que sea número.
            motIng = prompt("Escriba el motivo del movimiento: ");
            console.log(fechaMovIng + " Ingreso --> $" + movIng + " Detalle: " + motIng);
            break;
        case "2":
            fechaMovEgr = prompt("Escriba la fecha del movimiento en el siguiente formato: dd/mm/aaaa");//Agregar Validación de fechas.
            movEgr = parseFloat(prompt("Escriba el valor de Egreso: "));
            while(isNaN(movEgr)){
                movEgr = parseFloat(prompt("Solo se permiten números. Escriba el valor de Ingreso: "));
            };
            motEgr = prompt("Escriba el motivo del movimiento: ");
            console.log(fechaMovEgr + " Egreso --> -$" + movEgr + " Detalle: " + motEgr);
            break;
    }
    tipoMov = prompt("Escriba el tipo de movimiento. Si es un Ingreso escriba '1', si es un Egreso escriba '2'. Para finalizar la carga de datos escriba 'fin'. ");
}
//Función para realizar la suma del saldo:
const saldo = (valor1, valor2, valor3) => valor1 + valor2 - valor3;
console.log("Su saldo actual es de: $"+saldo(saldoInicial,movIng,movEgr)); //