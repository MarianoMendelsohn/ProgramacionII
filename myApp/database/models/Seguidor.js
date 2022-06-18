module.exports = (sequelize,DataTypes) => {
    let cols={
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        usuarios_seguidos_id:{
            type:DataTypes.INTEGER
        },
        usuarios_seguidores_id:{
            type:DataTypes.INTEGER
        },
    };
    let config = {
        tableName:"seguidores",
        timestamps: false,
        underscored:true,
    };
    
    const Seguidor = sequelize.define('Seguidor',cols,config);

    Seguidor.associate = function(models){
        Seguidor.belongsTo(models.Usuario, {
            as: 'Usuarios',
            foreignKey: 'usuarios_seguidos_id',
            timestamps: false
        }),
        Seguidor.belongsTo(models.Usuario, {
            as: 'Usuarios2',
            foreignKey: 'usuarios_seguidores_id',
            timestamps: false
        })
}
    return Seguidor;
}
    