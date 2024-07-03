const{Sequelize}=  require('sequelize');
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
// Importing Models
const Authors = require('./models/authors'); 
const Books = require('./models/books');
const Members = require('./models/members');
const Loans = require('./models/loans');
const Reservations = require('./models/reservations');


// Syncing the models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database sync successful');
    // Other application logic
  })
  .catch(err => {
    console.error('Database sync failed:', err);
  }); 
 
