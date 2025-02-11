const Sequelize = require('sequelize');
const {DataTypes}=Sequelize;
const sequelize = new Sequelize('sequelizedb', 'root', 'toor',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', // or postgres, mssql, sqlite
    // define:{
    //     freezeTableName:true
    // }
});


//method 1: then()  callback
sequelize.authenticate().then(()=>{
    console.log('Done: Connection has been established successfully.'); 
}).catch((error)=>{
    console.error('Fail: Unable to connect to the database:', error);
});
const User = sequelize.define('user', {
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'Please enter your username'
            },
            notEmpty:{
                msg:'Username cannot be empty'
            },
            len:{
                args:[2,4],
                msg:'Please enter a username with at least 3 but not more than 20 characters'
        }
    
        }
    },
    password:{
        type:DataTypes.STRING,
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue:18
    },
    wittCodeRocks:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    freezeTableName:true,
    timestamps:false   // it reomves the timestamp columns
});

User.sync({alter:true}).then(()=>{
    /* 
    Validate doneby create(). So use single record to test validation
  
    */
    // Njia ya Pili: create() method
    return User.create(
        {
        username:'kassim',
        age:30,
        password:'123',
       }
);
    
}).then((data)=>{
    // data.increment({age:2}); 
    console.log(data.toJSON());    
}).catch((error)=>{
 console.log(error);
});
