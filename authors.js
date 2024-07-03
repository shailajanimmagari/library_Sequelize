const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'shailaja',
    password: '1121',
    database: 'postgres'
});

// Creating Authors Model
const Authors = sequelize.define('Authors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_year: {
        type: DataTypes.INTEGER
    },
    nationality: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'authors'
});

module.exports = Authors;
