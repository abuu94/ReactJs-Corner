const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
//npm install bcrypt
const bcrypt = require('bcrypt');
//npm install zlib
const zlib = require('zlib');
const { type } = require('os');
const { timeStamp, error } = require('console');
const sequelize = new Sequelize('sequelizedb', 'root', 'toor',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', 
});
sequelize.authenticate().then(()=>{
    console.log('Done: Connection has been established successfully.'); 
}).catch((error)=>{
    console.error('Fail: Unable to connect to the database:', error);
});

const Country = sequelize.define('country',{
    countryName:{
        type:DataTypes.STRING,
        unique:true
    }  
  },{
    // freezeTableName:true,
    timestamps:false
  });

const Capital=sequelize.define('capital',{
    capitalName:{
        type:DataTypes.STRING,
        unique:true
    }

    },{
    // freezeTableName:true,
    timestamps:false
});

Country.hasOne(Capital);  
//Relationship : (Capital,{foreignKey:'countryID'})
// You can provide custome FK 

let country,capital; //variables
sequelize.sync({alter:true}).then(()=>{
    console.log('Database synchronized');
    //Helper Method to insert FK value from parent to child table
    //set,get and create
    return Capital.findOne({ where:{ capitalName:'Dodoma'}});
}).then((data)=>{
    capital=data;
    return Country.findOne({where:{ countryName:'Tanzania'}});
}).then((data)=>{
    country=data;
    country.setCapital(capital);

    // here u can use helper methods set,get and create
})
.catch((error)=>{
    console.log(error);
});

