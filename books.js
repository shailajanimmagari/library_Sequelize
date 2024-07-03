const{Sequelize, DataTypes}=  require('sequelize');
const sequelize=new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'shailaja',
    password:'1121',
    database:'postgres'
});

//Creating Books Model
const Books= sequelize.define('Books',{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true 
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    authorId:{
        type: DataTypes.INTEGER,
        references:{
            model:'authors',
            key: 'id'
        }
    },
    genre:{
        type: DataTypes.STRING, 
        allowNull: false
    },
    isbn:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    publication_year:{
        type: DataTypes.INTEGER
    }
}, {
    tableName:'books'
});
module.exports=Books;