{

    // Clase GATO

    //Constructor del gato

    function Gato(nombreGato, fechaNacimiento, raza, peso, edad) {
        this.nombreGato = nombreGato;
        this.fechaNacimiento = fechaNacimiento;
        this.raza = raza;
        this.peso = peso;
        this.edad = edad;
    }


    Gato.prototype.jugar = (gato, imagen) => {

        if (gato.peso > 0)
            gato.peso--;

        imagen.src = "img/jugando.jpg";
    }

    Gato.prototype.comer = (gato, imagen) => {

        if (gato.peso < 15)
            gato.peso++;

        imagen.src = "img/comiendo.jpg";
    }

    Gato.prototype.dormir = (imagen) => {

        imagen.src = "img/durmiendo.jpg";
    }

    Gato.prototype.getEdad = (gato) => {


        let expresion = new RegExp("^([0-9]{2})([/-])([0-9]{2})\\2([0-9]{4})$");
        let [, dia, , mes, anno] = expresion.exec(gato.fechaNacimiento);

        let diaActual = new Date();

        let date = new Date(`${anno}/${mes}/${dia}`);

        let edad = diaActual.getFullYear() - date.getFullYear();
        let m = diaActual.getMonth() - date.getMonth();

        if (m < 0 || (m === 0 && diaActual.getDate() < date.getDate())) {
            edad--;
        }

        return edad;
    }
}