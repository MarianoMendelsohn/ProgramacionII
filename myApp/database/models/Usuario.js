module.exports=()=>{

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING
        },
        imagen_perfil: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING
        },
        birthdate: {
            type: DataTypes.DATE
        },
    }
    let config = {
        tablename: 'usuarios',
    };
    const Usuario = sequelize.define ('Usuario', cols, config);
    return Usuario;
}