const { DataTypes } = require( 'sequelize' );
const { db } = require( '../utils/database' );

const User = db.define( 'user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'admin'
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'available'
    }
});

module.exports = { User };