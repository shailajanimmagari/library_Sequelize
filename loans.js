const{Sequelize, DataTypes}=  require('sequelize');
const sequelize=new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'shailaja',
    password:'1121',
    database:'postgres'
});

//Creating Loans Model 

const Loans= sequelize.define('Loans',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    book_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'books',
            key:'id'
        }
    },
    member_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'members',
            key:'id'
        }
    },
    loan_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    due_date:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{
    tableName:'loans'
});

module.exports=Loans;