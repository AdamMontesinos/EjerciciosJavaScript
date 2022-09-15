//1
let arxiu = prompt("Quin nom tindrà l'arxiu?");
alert(arxiu);

//2
let frase = prompt("Escriu una frase");
let num1= prompt("Escriu un nombre");
let num2= prompt("Escriu un altre nombre");

alert(frase.slice(num1,num2));

//3
let frase2 = prompt("Escriu un text");
const array = frase2.split(" ");
alert(frase2.toUpperCase() + "\n" + frase2.toLowerCase() + "\n" + frase2.length + "\n" + array.length);

//4
let nomcognom = prompt("Nom i Cognom");
const arraynom = nomcognom.split(" ");
const inicial = arraynom[0].charAt(0).toUpperCase();
const cognom = arraynom[1].toUpperCase();
let data = prompt("Data d'avui");
const arraydata = data.split("/");
let email = prompt("Escriu el teu email");
const emailjoan = email.replace("@gmail.com","@iesjoandasutria.org")
let password = prompt("Escriu la teva contrasenya");

console.log("Barcelona " + arraydata[0] + " de " + arraydata[1] + " any " + arraydata[2] +"\n" +
            "Benvolgut/da " + inicial + "," + cognom + "\n" +
            "Correu personal: " + email + "\n" +
            "Correu d'empresa: " + emailjoan + "\n" +
            "\n" +
            "Password: ****" + password + "\n" +
            "\n" +
            "Atentament," + "\n"+
            "INS Jda");