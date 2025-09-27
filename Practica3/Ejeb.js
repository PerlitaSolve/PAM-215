
function verificarUsuario(usuario){
    let promesa = new Promise((resolve, reject)=>{

        setTimeout(() =>{
            if (usuario === "admin"){
                resolve('Acceso concedido');
            }else{
                reject('Acceso denegado');
            }
        }, 2000);
    });
    return promesa;
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));

verificarUsuario("Perla")
    .then(res=> console.log(res))
    .catch(err=> console.error(err));
