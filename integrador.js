alert("Buen provecho");
alert("Bienvenido a mi restaurante");
var entrada=parseInt(prompt("Coloca el precio de la entrada"));
console.log ("El costo de la entrada es:", entrada);
var segundo=parseInt(prompt("Coloca el precio del segundo"));
console.log ("El costo del segundo es:", segundo);
var postre=parseInt(prompt("Coloca el precio del postre"));
console.log ("El costo del postre es:", postre);
var total=entrada+segundo+postre;
console.log ("El costo total es: ", total);
var IGV=(total*0.18)+total;
console.log ("El costo incluido el IGV es: ",IGV);



