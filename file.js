const{Sequelize, DataTypes}=  require('sequelize');
const sequelize=new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'shailaja',
    password:'1121',
    database:'postgres'
});
/*async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established');
    }catch (error){
        console.error('Connection not done yet')
    }
}
testConnection(); */
// Database Schema

// Creating Authors Model

const Authors=sequelize.define('Authors', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_year:{
        type: DataTypes.INTEGER
    },
    nationality:{
        type: DataTypes.STRING
    }
},{
    tableName:'authors'
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
//Creating Reservations Model
const Reservations=sequelize.define('Reservations',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
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
    reservation_date:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{
    tableName:'reservations'
});
// Syncing the models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database sync successful');
    // Other application logic
  })
  .catch(err => {
    console.error('Database sync failed:', err);
  }); 
  module.exports={Books, Authors, Members, Loans, Reservations};
