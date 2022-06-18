module.exports= (sequelize, DataTypes)=>{

    const Producto = sequelize.define ("Productos",cols, config);
    
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
        fecha_creacion: {
            type: DataTypes.DATE
        },
        updateAt: {
            type: DataTypes.DATE
        },
        
        usuario_id: {
            type: DataTypes.INTEGER
        },
        comentario_id: {
            type: DataTypes.INTEGER
        },
        

    }
    let config = {
        tablename: 'productos',
        timestamps: false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };
  
    return Producto;
}
