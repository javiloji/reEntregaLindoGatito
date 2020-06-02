{

    // Comprobaciones del formulario

    let comprobarNombre = function (textoIntroducido) {
        let expresion = new RegExp("^[a-zA-Zá-úÁ-Ú]+$");
        if(textoIntroducido == "")
            return "El campo no puede quedar vacío";
        if (!expresion.test(textoIntroducido.trim()))
            return "Introduce un nombre válido";
        return "";
    }

    let comprobarPeso = function (peso) {
        let expresion = new RegExp("^[0-9]+$");

        if (peso < 1 || peso > 14) {
            return "El peso tiene que estar entre 1 y 14";
        }

        if (!expresion.test(peso.trim()))
            return "El campo no puede quedar vacío";
        return "";
    }

    let comprobarRaza = function (opcion){
        if(opcion == "")
            return "Debes seleccionar una raza";
        
        else
            return "";
        
    }

    function comprobarFecha(fecha) {
        try {

            let expresion = new RegExp("^([0-9]{4})([/-])([0-9]{2})\\2([0-9]{2})$");
            let [, anno, , mes, dia] = expresion.exec(fecha.trim());

            let diaActual = new Date();

            let date = new Date(`${anno}/${mes}/${dia}`);

            let edad = diaActual.getFullYear() - date.getFullYear();
            let m = diaActual.getMonth() - date.getMonth();

            if (m < 0 || (m === 0 && diaActual.getDate() < date.getDate())) {
                edad--;
            }

            if (edad < 0) {
                return "La fecha no puede ser futura";
            }

            return "";

        } catch (error) {
            if (fecha.trim() == "") {
                return "La fecha no es válida";
            }
            return "Introduce un formato válido, '22/12/2222' o '29-02-2000'";
        }
    }

    // Metodo para crear la nueva ventana

    let crearVentanaGato = () => {

        let nuevoGato = window.open("", "", "left=300px,top=300px,width=500px,height=600px");
        nuevoGato.document.write(`
                <html>
                    <head>
                        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                        <title id="titulo">Nuevo Gato</title>
                        <script src="js/Gato.js"></script>
                        <script src="js/hijo.js"></script>
                        <link rel="stylesheet" href="css/style.css">
                    </head>
                    <body>
                        <div id="container">
                            <h1>Gato </h1>
                            <img id="gatoPrincipal" src=""></img>
                            <p id="nombre"></p>
                            <p id="fecha"></p>
                            <p id="raza"></u></p>
                            <p id="peso"></p>
                            <p id="mensajeMuerto"></p>
                            <p id="mensajeEdad"></p>
                            <button id="jugar">Jugar</button>
                            <button id="comer">Comer</button>
                            <button id="dormir">Dormir</button>
                            <button id="edad">Edad</button>
                        </div>
                    </body>
                </html>
                `
        );
        nuevoGato.document.close();

    }
    let inicio = () => {

        document.getElementById("enviar").addEventListener("click", function (event) {
            let error = false;

            event.preventDefault();

            let nombre = document.getElementById("nombre");
            let peso = document.getElementById("peso");
            let fecha = document.getElementById("fecha");
            let raza = document.getElementById("raza");
            
            nombre.nextSibling.innerHTML = comprobarNombre(nombre.value);
            peso.nextSibling.innerHTML = comprobarPeso(peso.value);
            fecha.nextSibling.innerHTML = comprobarFecha(fecha.value);
            raza.nextSibling.innerHTML = comprobarRaza(raza.value);

            Array.from(document.getElementsByTagName("span")).forEach(i => {
                if (i.innerHTML != "") {
                    error = true;
                }
            })
            if (!error) {
                crearVentanaGato();
            }

        });

    }

    document.addEventListener("DOMContentLoaded", inicio);

}