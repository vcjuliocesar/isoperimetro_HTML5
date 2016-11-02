/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//http://blogs.kinetica-solutions.com/blog/category/html5/
var fondo, canvas1, canvas2, canvas3, canvas4, buffer;
var ctxf, ctx1, ctx2, ctx3, ctx4, ctxbuffer;
var x, y;
var pasto = new Image();
var Cerca1 = new Image();
var Lechuga = new Image();
window.addEventListener("load", function(evt) {
    Iniciar();
}, false);

function Iniciar() {
    fondo = document.getElementById('fondo');
    canvas1 = document.getElementById('plano');
    canvas2 = document.getElementById('fijos');
    canvas3 = document.getElementById('movible');
    canvas4 = document.getElementById('imagenes');
    //buffer = document.createElement("canvas");

    fondo.width = 1200;
    canvas1.width = 1200;
    canvas2.width = 1200;
    canvas3.width = 1200;
    canvas4.width = 1200;
    //buffer.width = canvas4.width;

    fondo.height = 600;
    canvas1.height = 600;
    canvas2.height = 600;
    canvas3.height = 600;
    canvas4.height = 600;
    // buffer.height = canvas4.height;

    ctxf = fondo.getContext('2d');
    ctx1 = canvas1.getContext('2d');
    ctx2 = canvas2.getContext('2d');
    ctx3 = canvas3.getContext('2d');
    ctx4 = canvas4.getContext('2d');
    //ctxbuffer = buffer.getContext('2d');

    document.onselectstart = function() {
        return false;
    };
    document.onmousedown = function() {
        return false;
    };

    EscribeMensage(ctx4, "Altura: 263cm2", 800, 50);
    EscribeMensage(ctx4, "Base: 475cm2", 800, 70);
    EscribeMensage(ctx4, "Perimetro: 124925cm2", 800, 90);
    DibujaFondo();
    DibujaCerca();
    DibujaPlano();
    Lechugas();
    DibujaPuntosFijos();
    mouseDown();
    mouseUp();
}

function mouseDown() {
    window.addEventListener("mousedown", startAnimacion, false);
    //window.addEventListener("mousedown", LechugaMov, false);
    //window.addEventListener("mousedown", cercaMov, false);
}
function mouseUp() {
    window.addEventListener("mouseup", stopAnimacion, false);
    //window.addEventListener("mouseup", stopLechuga, false);
    //window.addEventListener("mouseup", stopCerca, false);
}


function startAnimacion() {
    window.addEventListener('mousemove', Movible, false);
}
function stopAnimacion() {
    window.removeEventListener("mousemove", Movible, false);
}




//function  getParameter(parametro) {
//   var url = location.href;
//   var index = url.indexOf("?");
//    index = url.indexOf(parametro, index) + parametro.length;
//    if (url.charAt(index) == "=") {
//        var result = url.indexOf("&", index);
//        if (result == -1) {
//            result = url.length;
//        }
//        var color = url.substring(index + 1, result);
//        switch (color) {
//            case "rojo":
//                Color_rojo();
//                break;
//
//            case "azul":
//                Color_azul();
//                break;
//
//            case "verde":
//                Color_verde();
//                break;
//
//            default:
//                Todos();
//                //break;
//        }
//    }
//}

function EscribeMensage(ctx, message, posx, posy) {
//contexto.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, posx, posy);
}

function Clear(content, canvas) {
    content.clearRect(0, 0, canvas.width, canvas.height);
}

function DibujaPlano() {
    ctx1.beginPath();
    ctx1.moveTo(0, 550);
    ctx1.lineTo(1200, 550);
    ctx1.stroke();
}

function DibujaCerca() {
    for (var ce = 66; ce < 520; ce = ce + 35) {
        ctx4.beginPath();
        ctx4.rect(ce, 206, 20, 80);
        ctx4.rect(ce, 470, 20, 80);
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        ctx4.fill();
        ctx4.stroke();
        ctx4.closePath();
    }

    ctx4.beginPath();
    ctx4.strokeStyle = 'black';
    ctx4.fillStyle = 'rgb(168,143,91)';
    //ctx4.lineWidth = 3;
    ctx4.moveTo(30, 206);
    ctx4.lineTo(50, 206);
    ctx4.lineTo(50, 550);
    ctx4.lineTo(30, 550);
    ctx4.closePath();
    ctx4.stroke();
    ctx4.fill();

    ctx4.beginPath();
    ctx4.strokeStyle = 'black';
    ctx4.fillStyle = 'rgb(168,143,91)';
    ctx4.moveTo(525, 206);
    ctx4.lineTo(545, 206);
    ctx4.lineTo(545, 550);
    ctx4.lineTo(525, 550);
    ctx4.closePath();
    ctx4.stroke();
    ctx4.fill();

    ctx4.beginPath();
    ctx4.strokeStyle = 'black';
    ctx4.fillStyle = 'rgb(168,143,91)';
    //ctx4.lineWidth = 3;
    ctx4.moveTo(25, 240);
    ctx4.lineTo(25, 230);
    ctx4.lineTo(550, 230);
    ctx4.lineTo(550, 240);
    ctx4.closePath();
    ctx4.stroke();
    ctx4.fill();

    ctx4.beginPath();
    ctx4.strokeStyle = 'black';
    ctx4.fillStyle = 'rgb(168,143,91)';
    //ctx4.lineWidth = 3;
    ctx4.moveTo(25, 260);
    ctx4.lineTo(25, 250);
    ctx4.lineTo(550, 250);
    ctx4.lineTo(550, 260);
    ctx4.closePath();
    ctx4.stroke();
    ctx4.fill();

    ctx4.beginPath();
    ctx4.strokeStyle = 'black';
    ctx4.fillStyle = 'rgb(168,143,91)';
    //ctx4.lineWidth = 3;
    ctx4.moveTo(25, 510);
    ctx4.lineTo(25, 500);
    ctx4.lineTo(550, 500);
    ctx4.lineTo(550, 510);
    ctx4.closePath();
    ctx4.stroke();
    ctx4.fill();

    ctx4.beginPath();
    ctx4.strokeStyle = 'black';
    ctx4.fillStyle = 'rgb(168,143,91)';
    //ctx4.lineWidth = 3;
    ctx4.moveTo(25, 530);
    ctx4.lineTo(25, 520);
    ctx4.lineTo(550, 520);
    ctx4.lineTo(550, 530);
    ctx4.closePath();
    ctx4.stroke();
    ctx4.fill();

    for (var cer = 280; cer < 470; cer = cer + 30) {
        ctx4.beginPath();
        ctx4.rect(40, cer, 15, 25);
        ctx4.rect(520, cer, 15, 25);
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        ctx4.fill();
        ctx4.stroke();
        ctx4.closePath();

    }
}

function Lechugas() {
    Lechuga.onload = function() {
        for (var lx = 60; lx < 500; lx = lx + 30) {
            for (var ly = 60; ly < 230; ly = ly + 30) {
                ctx4.drawImage(Lechuga, lx, ly + 230, 30, 30);
            }
        }
    };
    Lechuga.src = "../img/lettuce.png";
}

function DibujaPuntosFijos() {
    ctx2.beginPath();
    ctx2.arc(50, 550, 5, 0, Math.PI * 2, false);
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.arc(525, 550, 5, 0, Math.PI * 2, false);
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.arc(525, 287, 5, 0, Math.PI * 2, false);
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.arc(50, 287, 5, 0, Math.PI * 2, false);
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.arc(1050, 550, 5, 0, Math.PI * 2, false);
    ctx2.fill();
    ctx2.closePath();

    ctx2.strokeStyle = 'black';
    ctx2.beginPath();
    ctx2.moveTo(50, 287);
    ctx2.lineTo(50, 550);
    ctx2.stroke();

    ctx2.strokeStyle = 'black';
    ctx2.beginPath();
    ctx2.moveTo(525, 287);
    ctx2.lineTo(525, 550);
    ctx2.stroke();

    ctx2.strokeStyle = 'black';
    ctx2.beginPath();
    ctx2.moveTo(50, 287);
    ctx2.lineTo(525, 287);
    ctx2.stroke();
}

function DibujaFondo() {
    pasto.onload = function() {
        var Patron = ctxf.createPattern(pasto, 'repeat');
        ctxf.fillStyle = Patron;
        ctxf.fillRect(0, 0, ctxf.canvas.width, ctxf.canvas.height);
    };
    pasto.src = "../img/Green_grass_by_Gardek.jpg";
}



function Movible(event) {
    x = new Number();
    y = new Number();
    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    x -= canvas3.offsetLeft;
    y -= canvas3.offsetTop;
    if ((x <= 525) && (x >= 50)) {
        Clear(ctx1, canvas1);
        Clear(ctx2, canvas2);
        Clear(ctx3, canvas3);
        Clear(ctx4, canvas4);
        DibujaPlano();

        EscribeMensage(ctx4, "Altura: " + (525 - Math.floor(x / 2)) + "cm2", 800, 50);
        EscribeMensage(ctx4, "Base: " + (x - 50) + "cm2", 800, 70);
        EscribeMensage(ctx4, "Perimetro: " + ((525 - Math.floor(x / 2)) * (x - 50)) + "cm2", 800, 90);

        ctx2.beginPath();
        ctx2.arc(50, 550, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx3.beginPath();
        ctx3.arc(x, 550, 5, 0, Math.PI * 2, false);
        ctx3.fill();
        ctx3.closePath();

        ctx2.beginPath();
        ctx2.arc(x, Math.floor(x / 2) + 25, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx2.beginPath();
        ctx2.arc(50, Math.floor(x / 2) + 25, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx2.beginPath();
        ctx2.arc(1050, 550, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx2.strokeStyle = 'black';
        ctx2.beginPath();
        ctx2.moveTo(x, 550);
        ctx2.lineTo(x, Math.floor(x / 2) + 25);
        ctx2.stroke();

        ctx2.strokeStyle = 'black';
        ctx2.beginPath();
        ctx2.moveTo(50, Math.floor(x / 2) + 25);
        ctx2.lineTo(x, Math.floor(x / 2) + 25);
        ctx2.stroke();

        ctx2.strokeStyle = 'black';
        ctx2.beginPath();
        ctx2.moveTo(50, 550);
        ctx2.lineTo(50, Math.floor(x / 2) + 25);
        ctx2.stroke();

        //LechugaMovible();

        for (var lx = 60; lx < x - 50; lx = lx + 30) {
            for (var ly = x / 2 - 200; ly < 230; ly = ly + 30) {
                ctx4.drawImage(Lechuga, lx, ly + 230, 30, 30);
            }
        }

        for (var cer = 66; cer < x - 30; cer = cer + 35) {
            ctx4.beginPath();
            ctx4.rect(cer, Math.floor(x / 2) - 55, 20, 80);
            ctx4.rect(cer, 470, 20, 80);
            ctx4.strokeStyle = 'black';
            ctx4.fillStyle = 'rgb(168,143,91)';
            ctx4.fill();
            ctx4.stroke();
            ctx4.closePath();
        }
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        // ctx4.lineWidth = 2;
        ctx4.moveTo(30, Math.floor(x / 2) - 55);
        ctx4.lineTo(50, Math.floor(x / 2) - 55);
        ctx4.lineTo(50, 550);
        ctx4.lineTo(30, 550);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 2;
        ctx4.moveTo(x, Math.floor(x / 2) - 55);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 55);
        ctx4.lineTo(x + 20, 550);
        ctx4.lineTo(x, 550);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, Math.floor(x / 2) - 25);
        ctx4.lineTo(25, Math.floor(x / 2) - 15);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 15);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 25);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, Math.floor(x / 2) + 5);
        ctx4.lineTo(25, Math.floor(x / 2) - 5);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 5);
        ctx4.lineTo(x + 20, Math.floor(x / 2) + 5);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, 510);
        ctx4.lineTo(25, 500);
        ctx4.lineTo(x + 20, 500);
        ctx4.lineTo(x + 20, 510);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, 530);
        ctx4.lineTo(25, 520);
        ctx4.lineTo(x + 20, 520);
        ctx4.lineTo(x + 20, 530);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        for (var cer = x / 2 + 20; cer < 470; cer = cer + 30) {
            ctx4.beginPath();
            ctx4.rect(40, cer, 15, 25);
            ctx4.rect(x - 5, cer, 15, 25);
            ctx4.strokeStyle = 'black';
            ctx4.fillStyle = 'rgb(168,143,91)';
            ctx4.fill();
            ctx4.stroke();
            ctx4.closePath();

        }

    } else if ((x >= 525) && (x <= 1050)) {
        Clear(ctx1, canvas1);
        Clear(ctx2, canvas2);
        Clear(ctx3, canvas3);
        Clear(ctx4, canvas4);
        DibujaPlano();

        EscribeMensage(ctx4, "Altura:" + (525 - Math.floor(x / 2)) + "cm2", 800, 50);
        EscribeMensage(ctx4, "Base:" + (x - 50) + "cm2", 800, 70);
        EscribeMensage(ctx4, "Perimetro: " + ((525 - Math.floor(x / 2)) * (x - 50)) + "cm2", 800, 90);
        //DibujaPuntosFijos();
        ctx2.beginPath();
        ctx2.arc(50, 550, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx3.beginPath();
        ctx3.arc(x, 550, 5, 0, Math.PI * 2, false);
        ctx3.fill();
        ctx3.closePath();

        ctx2.beginPath();
        ctx2.arc(x, Math.floor(x / 2) + 25, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx2.beginPath();
        ctx2.arc(50, Math.floor(x / 2) + 25, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx2.beginPath();
        ctx2.arc(1050, 550, 5, 0, Math.PI * 2, false);
        ctx2.fill();
        ctx2.closePath();

        ctx2.strokeStyle = 'black';
        ctx2.beginPath();
        ctx2.moveTo(x, 550);
        ctx2.lineTo(x, Math.floor(x / 2) + 25);
        ctx2.stroke();

        ctx2.strokeStyle = 'black';
        ctx2.beginPath();
        ctx2.moveTo(50, Math.floor(x / 2) + 25);
        ctx2.lineTo(x, Math.floor(x / 2) + 25);
        ctx2.stroke();

        ctx2.strokeStyle = 'black';
        ctx2.beginPath();
        ctx2.moveTo(50, 550);
        ctx2.lineTo(50, Math.floor(x / 2) + 25);
        ctx2.stroke();

        //  LechugaMovible();
        for (var lx = 60; lx < x - 50; lx = lx + 30) {
            for (var ly = x / 2 - 200; ly < 230; ly = ly + 30) {
                ctx4.drawImage(Lechuga, lx, ly + 230, 30, 30);
            }
        }

        //Clear(ctx4, canva4);
        for (var cer = 66; cer < x - 35; cer = cer + 35) {
            ctx4.beginPath();
            ctx4.rect(cer, Math.floor(x / 2) - 55, 20, 80);
            ctx4.rect(cer, 470, 20, 80);
            ctx4.strokeStyle = 'black';
            ctx4.fillStyle = 'rgb(168,143,91)';
            ctx4.fill();
            ctx4.stroke();
            ctx4.closePath();
        }
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        // ctx4.lineWidth = 2;
        ctx4.moveTo(30, Math.floor(x / 2) - 55);
        ctx4.lineTo(50, Math.floor(x / 2) - 55);
        ctx4.lineTo(50, 550);
        ctx4.lineTo(30, 550);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 2;
        ctx4.moveTo(x, Math.floor(x / 2) - 55);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 55);
        ctx4.lineTo(x + 20, 550);
        ctx4.lineTo(x, 550);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, Math.floor(x / 2) - 25);
        ctx4.lineTo(25, Math.floor(x / 2) - 15);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 15);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 25);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, Math.floor(x / 2) + 5);
        ctx4.lineTo(25, Math.floor(x / 2) - 5);
        ctx4.lineTo(x + 20, Math.floor(x / 2) - 5);
        ctx4.lineTo(x + 20, Math.floor(x / 2) + 5);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, 510);
        ctx4.lineTo(25, 500);
        ctx4.lineTo(x + 20, 500);
        ctx4.lineTo(x + 20, 510);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();

        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.fillStyle = 'rgb(168,143,91)';
        //ctx4.lineWidth = 3;
        ctx4.moveTo(25, 530);
        ctx4.lineTo(25, 520);
        ctx4.lineTo(x + 20, 520);
        ctx4.lineTo(x + 20, 530);
        ctx4.closePath();
        ctx4.stroke();
        ctx4.fill();


        for (var cer = x / 2 + 20; cer < 470; cer = cer + 30) {
            ctx4.beginPath();
            ctx4.rect(40, cer, 15, 25);
            ctx4.rect(x - 5, cer, 15, 25);
            ctx4.strokeStyle = 'black';
            ctx4.fillStyle = 'rgb(168,143,91)';
            ctx4.fill();
            ctx4.stroke();
            ctx4.closePath();

        }

    }
}