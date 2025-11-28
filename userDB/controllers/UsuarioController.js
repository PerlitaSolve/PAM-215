import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';


export class UsuarioController {
    constructor(){
        this.listeners = [];
    }

    //INICIALIZAR EL CONTROLADOR CON EL SERVICE
    async initialize() {
        await DatabaseService.initialize();
    }

    async obtenerUsuarios(){
        try{
            const data = await DatabaseService.getA();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        }catch (error){
            console.error('Error al obtener usuarios: ', error);
            throw new Error ('No se pudieron cargar los usuarios');
        }
    }

    async crearUsuario (nombre){
        try {
            //1.Validar datos
            Usuario.validar(nombre);

            //2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            //3. Notificar a los observadores
            this.notifyListeners();

            //4. Retornar usuario creado
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        }catch (error){
            console.error('Error al crear usuario: ', error);
            throw error;
        }
    }
    async actualizarUsuario(id, nuevoNombre){
        try{
            Usuario.validar(nuevoNombre);
            await DatabaseService.update(id, nuevoNombre);
            this.notifyListeners();
            return true;
        }catch(error){
            console.error("Error actualizando usuario: ", error);
            throw error;
        }
    }
    async eliminarUsuario(id){
        try{
            await DatabaseService.delete(id);
            this.notifyListeners();
            return true;
        }catch(error){
            console.error("Error eliminando usuario: ", error);
            throw error;
        }
    }

    //SISTEMA DE ONSERVADORES PARA ACTUALIZAR LA VISTA AUTOMATICAMENTE
    addListener(callback){
        this.listeners.push(callback);
    }

    removeListener(callback){
        this.listeners= this.listeners.filter(l =>l !== callback);
    }

    notifyListeners(){
        this.listeners.forEach(callback => callback());
    }
}

