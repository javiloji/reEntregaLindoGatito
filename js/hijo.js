{
    let imagenGato;

    let inicio = () => {

        let nombreGato = opener.document.getElementById("nombre").value;
        let fechaNacimiento = opener.document.getElementById("fecha").value;
        let raza = opener.document.getElementById("raza").value;
        let peso = opener.document.getElementById("peso").value;
        let gato = new Gato(nombreGato, fechaNacimiento, raza, peso);

        mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);

        let comer = document.getElementById("comer");
        let jugar = document.getElementById("jugar");
        let dormir = document.getElementById("dormir");
        let edad = document.getElementById("edad");


        jugar.addEventListener("click", function () {
            gato.jugar(gato, imagenGato);
            mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);

        });

        comer.addEventListener("click", function () {
            gato.comer(gato, imagenGato);
            mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);

        })

        dormir.addEventListener("click", function () {
            gato.dormir(imagenGato);
            mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);
        })

        edad.addEventListener("click", function () {
            document.getElementById("mensajeEdad").innerHTML = "El gato tiene " + gato.getEdad(gato) + " años";
        })
    }

    let mostrar = function (nombre, fecha, raza, peso) {

        document.getElementById("nombre").innerHTML = "Nombre del gato: " + nombre;
        document.getElementById("fecha").innerHTML = "Fecha de Nacimiento: " + fecha;
        document.getElementById("raza").innerHTML = "Raza: " + raza;
        document.getElementById("peso").innerHTML = "Peso: " + peso;

        imagenGato = document.getElementById("gatoPrincipal");

        if (imagenGato.getAttribute("src") != "img/jugando.jpg" && imagenGato.getAttribute("src") != "img/comiendo.jpg" && imagenGato.getAttribute("src") != "img/durmiendo.jpg") {
            switch (raza) {
                case "Persa":
                    imagenGato.src = "img/persa.jpg";
                    break;
                case "Siamés":
                    imagenGato.src = "img/siames.jpg";
                    break;
                case "Montés":
                    imagenGato.src = "img/montes.jpg";
                    break;
                case "De Bengala":
                    imagenGato.src = "img/bengala.jpg";
                    break;
                default:
                    imagenGato.src = "img/somali.jpg";
                    break;
            }
        }

        if (peso < 1) {
            document.getElementById("jugar").disabled = true;
            document.getElementById("comer").disabled = true;
            document.getElementById("dormir").disabled = true;
            imagenGato.src = "img/muerto.jpg";
            document.getElementById("mensajeMuerto").innerHTML = "El gato ha muerto por estar muy delgado";
        }
        if (peso > 14) {
            document.getElementById("jugar").disabled = true;
            document.getElementById("comer").disabled = true;
            document.getElementById("dormir").disabled = true;
            imagenGato.src = "img/gordoMuerto.jpg";
            document.getElementById("mensajeMuerto").innerHTML = "El gato ha muerto por comer demasiado";
        }


    }

    document.addEventListener("DOMContentLoaded", inicio);

}