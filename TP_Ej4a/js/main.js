// Ej 4+4.2 R.Oliva IoT DAW 2020
// Class User tomado de Ejemplo en Clase 3
// En Ejs 4 se mueve a User.ts
// Ej 3 modifica main para crear instancia usuarios de User
class Main {
    main() {
        this.myf = new MyFramework();
        console.log("TP Ej4 R.Oliva - IoT DAW Hola mundo");
        let b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haga click!";
        let usuarios;
        usuarios = new Array();
        usuarios.push(new User(1, "jperez@perez.com", "Juanito"));
        usuarios.push(new User(2, "hpepe@perez.com", "Horacito"));
        usuarios.push(new User(3, "csosa@perez.com", "Carlitos"));
        // remplazamos salida por consola
        this.mostrarUsuarios(usuarios);
    }
    mostrarUsuarios(users) {
        /*
        let items:string="";
        for(let i in users){
          users[i].printInfo();
          items+="<li>"+users[i].name+" "+users[i].email+"</li>";
        }
        */
        let strTemplate = `${users.map((item) => `<li>${item.name} ${item.email}</li>`).join('')}`;
        let ul = this.myf.getElementById("listaUsuarios");
        ul.innerHTML = strTemplate;
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
