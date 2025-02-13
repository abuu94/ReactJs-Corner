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

// Extra object arguments: RESTRICT, CASCADE, NO ACTION, SET DEFAULT, SET NULL
Country.hasOne(Capital,{onUpdate:'CASCADE'}); 
Capital.belongsTo(Country,{onDelete:'CASCADE'});   


let country,capital; 
sequelize.sync({alter:true}).then(()=>{
    console.log('Database synchronized');
    return Country.findOne({ where:{ countryName:'Uganda'}});
}).then((data)=>{
    country=data;
    return Capital.findOne({where:{ capitalName:'Nairobi'}});
}).then((data)=>{
    capital=data;
    return country.setCapital(capital);
})

.then((data)=>{
    console.log(data.toJSON())
})
.catch((error)=>{
    console.log(error);
});

