const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelizedb', 'root', 'toor',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql' // or postgres, mssql, sqlite
});


//method 1: then()  callback
sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.'); 
}).catch((error)=>{
    console.error('Unable to connect to the database:', error);
});

console.log('Another Tasks');
/*
//method 2: async/await
async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log(' Njia ya 2 :Connection has been established successfully.');
    }catch(error){
        console.error('Njia ya 2 : Unable to connect to the database:', error);
    }
}
testConnection();

//method 3: callback
async function testConnection2(){
   await sequelize.authenticate();
   console.log('Njia ya 3 :Connection has been established successfully.');
}
testConnection2();
*/

/* 
npm install tedious // Microsoft SQL Server
npm install pg pg-hstore // Postgres
npm install mysql2 // MySQL
npm install mariadb // MariaDB
npm install sqlite3 // SQLite
npm install oracle // Oracle
npm install mssql // Microsoft SQL Server
 */
