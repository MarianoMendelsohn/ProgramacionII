module.exports=()=>{

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
        usuario_id: {
            type: DataTypes.INTEGER
        },
        comentario_id: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tablename: 'productos',
    };
    const Producto = sequelize.define ("Producto",cols, config);
    return Producto;
}
