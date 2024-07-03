const{Sequelize, DataTypes}=  require('sequelize');
const sequelize=new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'shailaja',
    password:'1121',
    database:'postgres'
});

// Creating Members Model

const Members= sequelize.define('Members',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false 
    },
    address:{
        type: DataTypes.STRING
    },
    phone_number:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique: true 
    }
},{
    tableName:'members'
});

module.exports=Members;