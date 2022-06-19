module.exports = (sequelize, DataTypes) => {

    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
       texto_comentario: {
           type: DataTypes.STRING
        },
       productos_id: {
        type: DataTypes.INTEGER
        },
        usuarios_id: {
        type: DataTypes.INTEGER
        },
        created_at: {
        type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    };

    let config = { 
        tableName: "comentarios",
        timestamps: true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
        
    };

const Comentario = sequelize.define( 'Comentario' , cols, config);
Comentario.associate = function (models) {
    Comentario.belongsTo(models.Producto, {
        foreignKey: 'productos_id',
        as: 'producto'
    })
    
    Comentario.belongsTo(models.Usuario, { 
        foreignKey: 'usuarios_id',
        as: 'usuario'
    })
}
return Comentario;

};










