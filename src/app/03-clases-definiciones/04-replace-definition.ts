import { SuperHeroe } from './extra/classes';

/*
    Objetivo:
        Cambiar únicamente la refencia de SuperHeroe a Heroe
        OJO!: Pero no reemplazar los strings

    Tips:
        Replace Symbol
        F2   //Poner el cursor sobre la definicion que coincide y apretar F2 esto me permite cambiar todos// Ojo en este caso la clase
        si lo cambio directamente de las constantes, tendre un error ya que la clase seguira llamandose heroe. Que debo hacer? Es cambiar
        directamente la clase superheroe a heroe
*/


const wolverine = new SuperHeroe();
const ironman   = new SuperHeroe();
const spiderman = new SuperHeroe();

function saludar() {
    return 'El SuperHeroe Wolverine es genial!';
}

function gritar() {
    return 'El SuperHeroe en este string no se debe de cambiar';
}

