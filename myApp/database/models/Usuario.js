module.exports=(sequelize, DataTypes)=>{

    

    

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
        createdAt: {
            type: DataTypes.DATE
        },
        updateAt: {
            type: DataTypes.DATE
        }

    }
    let config = {
        tableName : "usuarios",
        timestamps: false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

  const Usuario = sequelize.define ('Usuario', cols, config);
    return Usuario;
}