module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        usuarios_seguidos_id: {
            type: DataTypes.INTEGER
        },
        usuarios_seguidores_id: {
            type: DataTypes.INTEGER
        },
    };
    let config = {
        tableName: "seguidores",
        timestamps: false,
        underscored: true,
    };

    const Seguidor = sequelize.define('Seguidor', cols, config);

    Seguidor.associate = function (models) {
        Seguidor.belongsTo(models.Usuario, {
            as: 'Seguidos',
            foreignKey: 'usuarios_seguidos_id',
            timestamps: true
        }),
            Seguidor.belongsTo(models.Usuario, {
                as: 'Seguidores',
                foreignKey: 'usuarios_seguidores_id',
                timestamps: true
            })
    }
    return Seguidor;
}
