
alert("Bienvenidos a Saphirus Suhe")

const elements = [
    { nam: "Aerosoles", precio: 500 },
    { nam: "Difusor", precio: 400 },
    { nam: "Sahumerios", precio: 300 },
    { nam: "Caritas", precio: 200 },
];

let cesta = []

let eleg = prompt("Bienvenidos a Saphirus Suhe😀🌟💫, las mejores fragancias para tu vida💙💚💛¿Quisieras comprar algunos de nuestros porductos? si o no")

while (eleg != "si" && eleg != "no") {
    alert("Ingresa Aceptar o Rechazar")
    eleg = prompt("¿Quisieras comprar algunos de nuestros porductos? Aceptar o Rechazar")
}

if (eleg == "si") {
    alert("Te presento las mejores fragancias para tu vida, de la mano de Saphirus Suhe💙💚💛")
    let alltheElements = elements.map((elements) => elements.nam + " " + elements.precio + "$"
    );

    alert(alltheElements.join("-"))

} else if (eleg == "no") {
    alert("Gracias por tu visita")
}

while (eleg != "no") {
    let elements = prompt("agrega un elemento a tu cesta")
    let precio = 0

    if (elements == "Aerosoles" || elements == "Difusor" || elements == "Sahumerios" || elements == "Caritas") {
        switch (elements) {
            case "Aerosoles":
                precio = 500;
                break;
            case "Difusor":
                precio = 400;
                break;
            case "Sahumerios":
                precio = 300;
                break;
            case "Caritas":
                precio = 200;
                break;
            default: break;
        }
        let unidades = parseInt(prompt("Cuantos productos le gustaria adquirir"))
        cesta.push({ elements, unidades, precio })
        console.log(cesta)
    } else {
        alert("No contamos con unidades en stock")
    }
    eleg = prompt("¿Le gustaria agregar mas productos a su cesta?")

    while (seleccion == "no") {
        alert("Gracias por elegirnos")
        cesta.forEach((cestaFinal) => {
            console.log(`elements:${cestaFinal.elements},unidades:${cestaFinal.unidades},total a pagar por elements:${cestaFinal.elements = cestaFinal.precio}`)
        })


        break;
    }
}


const total = cesta.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`total a abonar es de:{}`)
