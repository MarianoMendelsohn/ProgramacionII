module.exports= (sequelize, DataTypes)=>{

    


    
    let cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo_producto: {
            type: DataTypes.STRING
        },
        imagen_producto: {
            type: DataTypes.STRING
        },
        descripcion_producto:{
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        
        usuarios_id: {
            type: DataTypes.INTEGER
        },

        

    }
    let config = {
        tablename: 'productos',
        timestamps: true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

  const Producto = sequelize.define ('Producto' ,cols, config);
  Producto.associate = function (models) {
    Producto.belongsTo(models.Usuario, {
        as: 'usuario',
        foreignKey: 'usuarios_id'
    })
    
 
}

  
    return Producto;
}
