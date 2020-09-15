/*
Patryk Rachanczyk
Pizza calculator
*/

alert("Welkom bij een pizza calculator. Bij ons kunt u 3 afmetingen pizza's kiezen small voor 4e, medium voor 8e en large voor 12e"); // alert die informatie over de besteling omschrijft


/*
Variabelen die voor de prijzen zijn
*/
var small = 4;
var medium = 8;
var large = 12;

/*
Variabelen die voor afmetingen zijn
*/
var aantalSmall;
var aantalMedium;
var aantalLarge;

/*
Prompt die een vraag over de afmeting stelt daarna slaat het bij een variabele op
*/
aantalSmall = prompt("Hoeveel small pizza's");
aantalMedium = prompt("Hoeveel medium pizza's");
aantalLarge = prompt("Hoeveel large pizza's");


document.writeln("Het aantal van de bestelde small pizza's"); // er schrijft informatie over het aantal op
document.writeln(aantalSmall, "<br>"); // er pakt opgeslaagde waarde van een variabele op
document.writeln("De bedrag van deze afmeting"); // er schrijft informatie over het kost 
document.writeln(small * aantalSmall, "e", "<br>"); // er berekent het prijs van deze afmeting door het gebruik maken van de keersommen. Daarvoor gebruikt ie een variabele van de prijs en opgeslaagde waarde van een prompt.

document.writeln("Het aantal van de bestelde medium pizza's"); // ^
document.writeln(aantalMedium, "<br>"); 
document.writeln("De bedrag van deze afmeting"); 
document.writeln(medium * aantalMedium, "e", "<br>"); 

document.writeln("Het aantal van de bestelde large pizza's"); // ^
document.writeln(aantalLarge, "<br>");
document.writeln("De bedrag van deze afmeting");
document.writeln(large * aantalLarge, "e", "<br>");

document.writeln("Het totale bedrag"); //er schrijft dit informatie op
document.write(small * aantalSmall + medium * aantalMedium + large * aantalLarge, "e"); // er berekent een tootale prijs van de hele besteling. 
																						//Hier worden de variabelen van de prijs en opgeslaagde waarde gebruikt.	