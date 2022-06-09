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
       producto_id: {
        type: DataTypes.INTEGER
    },
    usuario_id: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    };
    let config = { 
        tableName: "comentarios",
        timestamps: false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
        
    };
    const Comentario = sequelize.define("Comentario", cols, config);
return Comentario;

};










