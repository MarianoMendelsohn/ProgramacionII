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
    }
    };
    let config = { 
        tableName: "comentarios",
        
    };
    const Comentario = sequelize.define("Comentario", cols, config);
return Comentario;

};










