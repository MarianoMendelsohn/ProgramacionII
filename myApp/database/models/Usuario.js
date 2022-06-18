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
        created_at: {
            type: DataTypes.DATE
        },
        update_at: {
            type: DataTypes.DATE
        }

    }
    let config = {
        tableName : "usuarios",
        timestamps: false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

  const Usuario = sequelize.define ('Usuario', cols, config);

  Usuario.associate = function(models) {
    Usuario.hasMany(models.Producto, {
        as: 'Productos',
        foreignKey: 'usuarios_id',
        timestamps: false
    })

   
    Usuario.hasMany(models.Comentario, { 
        foreignKey: 'usuarios_id',
        as: 'comentarios',
    })

    
    Usuario.hasMany(models.Comentario,{
        foreignKey: 'usuarios_seguidos_id',
        as: 'seguidores',
    })
    
}



    return Usuario;
}