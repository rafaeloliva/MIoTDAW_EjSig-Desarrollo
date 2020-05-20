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
