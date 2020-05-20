// Ej 4+4.2 R.Oliva IoT DAW 2020
// Class User tomado de Ejemplo en Clase 3
// En Ejs 4 se mueve a User.ts

// Ej 3 modifica main para crear instancia usuarios de User
class Main{
   
    myf:MyFramework;

    main():void{
        
        this.myf = new MyFramework();
        console.log("TP Ej4 R.Oliva - IoT DAW Hola mundo");
        let b:HTMLElement = this.myf.getElementById("boton");
        console.log(b);
  
        b.textContent = "Haga click!";

        let usuarios:Array<User> = [];
        //usuarios = new Array<User>();
        usuarios.push(new User(1,"jperez@perez.com","Juanito"));
        usuarios.push(new User(2,"hpepe@perez.com","Horacito"));
        usuarios.push(new User(3,"csosa@perez.com","Carlitos"));

        // remplazamos salida por consola
        this.mostrarUsuarios(usuarios);
    }

    mostrarUsuarios(usuarios:Array<User>):void {
        /*
        let items:string="";
        for(let i in users){
          users[i].printInfo();
          items+="<li>"+users[i].name+" "+users[i].email+"</li>";
        }
        */
        
        let strTemplate:string=`${
            usuarios.map((item) =>`<li>${item.name} ${item.email}</li>`).join('')
          }`;
        // estaba faltando este elemento en index.html - daba error de ejecución
        let ul:HTMLElement = this.myf.getElementById("listaUsuarios");
        ul.innerHTML = strTemplate;
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
}

 

