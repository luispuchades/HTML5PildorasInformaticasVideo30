///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS V
 * Origin: Video30.html ==> Crear trazados curvos
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var lienzo;
    //CREAR TRAZADO EN CANVAS
    // arc()
    //1. Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    //2. Comenzamos el trazado del arco
    lienzo.arc(100,50,50,0,Math.PI,false);
    /**
     * Arc(x,y,r,rad1,rad2,boolean)
     *(x,y): son las coordenadas del centro del círculo
     *r: es el rádio del círculo
     *rad1: ángulo inicial en radianes
     *rad2: ángulo final en radianes
     *boolean: si es false, devuelve el arco, y si es true, devuelve el resto del arco
    */

    //3. Damos la orden de que dibuje la figura
    lienzo.stroke();

    //4. Trazar curva con quadraticCurve
    // quadraticCurveTo()
    //Situamos un punto inicial
    lienzo.moveTo(50,50);
    //Trazamos curva
    lienzo.quadraticCurveTo(300,50,50,290);
    /**
     * quadraticCurveTo(x1,y2,x1,y2)
     *x1,y1 son las coordenadas del punto de control de la curva
     *x2,y2 son las coordenadas del punto final de la curva
     */


    //5. Damos la orden de que dibuje la figura
    lienzo.stroke();

    //6. Trazamos una curva con bezierCurveTo. Este método tiene dos puntos de control
    // bezierCurveTo()
    //Situamos un punto inicial
    lienzo.moveTo(50,50);
    //Trazamos curva
    lienzo.bezierCurveTo(0,125,100,125,50,200);
    /**
     * bezierCurveTo(x1,y1,x2,y2,x3,y3)
     *x1,y1 son las coordenadas del punto de control primero de la curva
     *x2,y2 son las coordenadas del punto de control segundo de la curva
     *x3,y3 son las coordenadas del punto final de la curva
     *
     */

    //5. Damos la orden de que dibuje la figura
    lienzo.stroke();


}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', cargarDocumento, false);
