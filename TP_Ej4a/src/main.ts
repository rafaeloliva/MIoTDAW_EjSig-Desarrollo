// Class User tomado de Ejemplo en Clase 3
class User {
    private _id:number;
    private _name:string;
    private _email:string;
    private _isLogged:boolean;

    constructor(id:number, email:string, name:string){
        this.id = id;
        this.email = email;
        this.name = name;
        this.isLogged = false;
    }

    set id(id:number){
        this._id = id;
    }
    get id():number {
        return this._id;
    }
    set email(email:string){
        this._email = email;
    }    
    get email():string {
        return this._email;
    }
    set name(name:string){
        this._name = name;
    }    
    get name():string {
        return this._name;
    }
    set isLogged(flag:boolean){
        this._isLogged = flag;
    }
    get isLogged():boolean{
        return this._isLogged;
    }

    public printInfo():void{
        console.log("Nombre:"+this.name+" email:"+this.email+" logged:"+this.isLogged);
    }

}

// Ej 3 modifica main para crear instancia usuarios de User
class Main{
    main():void{
        console.log("TP Ej3 R.Oliva - IoT DAW Hola mundo");
        let usuarios:Array<User>;
        usuarios = new Array<User>();
        usuarios.push(new User(1,"jperez@perez.com","Juanito"));
        usuarios.push(new User(2,"hpepe@perez.com","Horacito"));
        usuarios.push(new User(3,"csosa@perez.com","Carlitos"));

        for(let i in usuarios){
            usuarios[i].printInfo();
        }
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
}

 

