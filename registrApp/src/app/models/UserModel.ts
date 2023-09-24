export class UserModel {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public userType: string,
        public username: string,
        public password: string,
        public nacimiento: string | undefined,
        public correo: string,
    ) {

    }
    
    //Convierte un objeto de tipo UserModel a un objeto de tipo JSON 
    static crearUsuario(event: {
        id: number,
        nombre: string,
        apellido: string,
        userType: string,
        username: string,
        password: string,
        nacimiento: string,
        correo: string,
    }) {
        return new UserModel(
            event.id,
            event.nombre,
            event.apellido,
            event.userType,
            event.username,
            event.password,
            event.nacimiento,
            event.correo,
        );
    }
}