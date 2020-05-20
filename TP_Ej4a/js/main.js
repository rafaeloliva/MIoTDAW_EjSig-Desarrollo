// Class User tomado de Ejemplo en Clase 3
class User {
    constructor(id, email, name) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.isLogged = false;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set isLogged(flag) {
        this._isLogged = flag;
    }
    get isLogged() {
        return this._isLogged;
    }
    printInfo() {
        console.log("Nombre:" + this.name + " email:" + this.email + " logged:" + this.isLogged);
    }
}
// Ej 3 modifica main para crear instancia usuarios de User
class Main {
    main() {
        console.log("TP Ej3 R.Oliva - IoT DAW Hola mundo");
        let usuarios;
        usuarios = new Array();
        usuarios.push(new User(1, "jperez@perez.com", "Juanito"));
        usuarios.push(new User(2, "hpepe@perez.com", "Horacito"));
        usuarios.push(new User(3, "csosa@perez.com", "Carlitos"));
        for (let i in usuarios) {
            usuarios[i].printInfo();
        }
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
