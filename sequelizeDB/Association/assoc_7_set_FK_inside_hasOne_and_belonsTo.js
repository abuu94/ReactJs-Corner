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

// the below line get updateed with object to define FK
// it is good practice to include the object in both hasOne and belongsTo
Country.hasOne(Capital,{
    foreignkey:{
        name:'countryID',
        type:DataTypes.INTEGER,
        allowNull: true, // allow null FK , this is normal
        default: 0
    }
}); 
Capital.belongsTo(Country,{
    foreignkey:{
        name:'countryID',
        type:DataTypes.INTEGER,
        allowNull: true, // allow null FK , this is normal
        default: 0
    }
}); 
// Country.hasOne(Capital); 
// Capital.belongsTo(Country);   // add this to be able to use setCountry()
//Relationship : (Capital,{foreignKey:'countryID'})
// You can provide custome FK 

let country,capital; //variables
sequelize.sync({alter:true}).then(()=>{
    console.log('Database synchronized');
    //Helper Method to insert FK value from parent to child table
    //set,get and create
    return Country.findOne({ where:{ countryName:'Kenya'}});
}).then((data)=>{
    country=data;
    return Capital.findOne({where:{ capitalName:'Nairobi'}});
}).then((data)=>{
    capital=data;
    return capital.setCountry(country);
}).then((data)=>{
    console.log(data.toJSON())
})
.catch((error)=>{
    console.log(error);
});

