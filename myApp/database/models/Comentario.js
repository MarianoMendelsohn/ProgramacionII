
module.exports = function (sequelize, DataTypes) {



   let alias = 'Comentario';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        texto_comentario: {
           type: DataTypes.STRING
       },
        created_at: {
        type: DataTypes.DATE
       },
        update_at: {
        type: DataTypes.DATE
        },
        id_producto: {
        type: DataTypes.INTEGER
        },
        id_usuario: {
        type: DataTypes.INTEGER
        },


    }
    

    let config = { 
        tableName: "comentarios",
        timestamps: false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
        
    };
    
    const Comentario = sequelize.define (alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Producto, {
            foreignKey: 'producto_id',
            as: 'producto'
        })
        
        Comentario.belongsTo(models.Usuario, { 
            foreignKey: 'usuario_id',
           as: 'usuario'
        })
    }
   
 

   return Comentario;

};














