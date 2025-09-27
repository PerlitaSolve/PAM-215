
function simularPeticionAPI(){
    return new Promise(resolve =>{
        setTimeout (()=> {
            resolve ("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos(){
    await simularPeticionAPI()
        .then(res=> console.log(res));
}

obtenerDatos();
