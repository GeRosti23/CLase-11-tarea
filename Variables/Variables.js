var DiaSem = prompt("Decime un dia de la semana");

switch (DiaSem) {
    case "lunes":
        alert("Hoy es lunes, toca pecho en el gym.");
        break;
    case "martes":
        alert("Hoy es martes, hay que salir a correr.");
        break;
    case "miércoles":
        alert("Hoy es miércoles, toca piernas en el gym.");
        break;
    case "jueves":
        alert("Hoy es jueves, toca espalda en el gym.");
        break;
    case "viernes":
        alert("Los viernes se corre.");
        break;
    case "sábado":
        alert("Hoy es sábado, podes descansar campeon.");
        break;
    case "domingo":
        alert("Hoy es domingo, hay almuerzo en familia.");
        break;
    default:
        alert("Escribe el día de la semana en minúsculas, por favor.");
} //Ejercicio 1


/*for (i = 20; i <= 70; i++) {
    document.write("El número es: " + i + "<br>");
}*/

var Pedido = prompt("Decime un numero");

for (i = 1; i <= Pedido; i++) {
    document.write("Hola mundo!<br>");
} //Ejercicio 2
