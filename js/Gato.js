{

    // Clase GATO

    //Constructor del gato

    function Gato(nombreGato, fechaNacimiento, raza, peso) {
        this.nombreGato = nombreGato;
        this.fechaNacimiento = fechaNacimiento;
        this.raza = raza;
        this.peso = peso;
        this.muerto = false;
    }

    Gato.prototype.jugar = function (imagen) {
        if (this.muerto) {
            return;
        }
        // if (this.peso > 0){
        this.peso--;
        imagen.src = "img/jugando.jpg";
        // }
        if (this.peso == 0) {
            this.muerto = true;
            imagen.src = "img/muerto.jpg"
        }
    }

    Gato.prototype.comer = function (imagen) {
        if (this.muerto) {
            return;
        }
        // if (this.peso < 15){
        this.peso++;
        imagen.src = "img/comiendo.jpg";
        // }
        if (this.peso == 15) {
            this.muerto = true;
            imagen.src = "img/gordoMuerto.jpg"
        }
    }

    Gato.prototype.dormir = function (imagen) {

        if (this.muerto)
            return;

        imagen.src = "img/durmiendo.jpg";
    }

    // Gato.prototype.morir

    Gato.prototype.getEdad = function () {

        if (this.muerto)
            return;

        let expresion = new RegExp("^([0-9]{4})([/-])([0-9]{2})\\2([0-9]{2})$");
        let [, anno, , mes, dia] = expresion.exec(this.fechaNacimiento);

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