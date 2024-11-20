
let saldo = [-3400, -2500, 4000, 8000, 2000]
let saldoTotaldeDeposito = 0;
let saldoActualDeRetiro = 0;
let saldoActualDelCliente = 0;


function calculateBalance(saldo) {
    for (let i = 0; i <= saldo.length; i++) {
        if (saldo[i] > 0) {
           saldoActualDelCliente= saldoActualDelCliente+ saldo[i]
        }

        if (saldo[i] < 0) {
            saldoActualDeRetiro = (saldoActualDeRetiro + saldo[i])
        }
    }

    saldoActualDeRetiro = saldoActualDeRetiro * -1;

   saldoTotaldeDeposito = saldoActualDelCliente - saldoActualDeRetiro;


    return { saldoActualDelCliente, saldoActualDeRetiro, saldoTotaldeDeposito }

}
console.log(calculateBalance(saldo));
    
let nombre="gloria";
let apellido="medina";

function bankBalance(nombre,apellido,saldoTotaldeDeposito,saldoActualDeRetiro,saldoActualDelCliente){
    console.log("Estimada"+ nombre+apellido+": El monto total de los depósitos es de:"+ saldoTotaldeDeposito+".El monto total de los retiros es de: $"+saldoActualDeRetiro+" Por lo tanto, su saldo actual en la cuenta es de:$"+saldoActualDelCliente)

}
bankBalance( gloria,medina,saldoTotaldeDeposito,saldoActualDeRetiro,saldoActualDelCliente)


   module.exports = bankBalance
