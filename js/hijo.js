{

    let inicio = () => {

        let imagenGato = document.getElementById("gatoPrincipal");
        let nombreGato = opener.document.getElementById("nombre").value;
        let fechaNacimiento = opener.document.getElementById("fecha").value;
        let raza = opener.document.getElementById("raza").value;
        let peso = opener.document.getElementById("peso").value;
        let gato = new Gato(nombreGato, fechaNacimiento, raza, peso);

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

        mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);

        let comer = document.getElementById("comer");
        let jugar = document.getElementById("jugar");
        let dormir = document.getElementById("dormir");
        let edad = document.getElementById("edad");


        jugar.addEventListener("click", function () {
            gato.jugar(imagenGato);
            if(gato.muerto && gato.peso == 0){
                document.getElementById("mensajeMuerto").innerHTML = "El gato ha muerto por estar muy delgado";

            }
            mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);

        });

        comer.addEventListener("click", function () {
            gato.comer(imagenGato);
            if(gato.muerto && gato.peso == 15){
                document.getElementById("mensajeMuerto").innerHTML = "El gato ha muerto por estar muy gordo";

            }
            mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);

        })

        dormir.addEventListener("click", function () {
            gato.dormir(imagenGato);
            mostrar(gato.nombreGato, gato.fechaNacimiento, gato.raza, gato.peso);
        })

        edad.addEventListener("click", function () {
            if(!gato.muerto)
                document.getElementById("mensajeEdad").innerHTML = "El gato tiene " + gato.getEdad() + " años";
            else
                document.getElementById("mensajeEdad").innerHTML = "El gato esta muerto";
        })
    }

    let mostrar = function (nombre, fecha, raza, peso) {

        document.getElementById("nombre").innerHTML = "Nombre del gato: " + nombre;
        document.getElementById("fecha").innerHTML = "Fecha de Nacimiento: " + fecha;
        document.getElementById("raza").innerHTML = "Raza: " + raza;
        document.getElementById("peso").innerHTML = "Peso: " + peso;
    }

    document.addEventListener("DOMContentLoaded", inicio);

}