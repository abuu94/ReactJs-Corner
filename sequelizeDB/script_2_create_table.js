const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelizedb', 'root', 'Mkubwa*94',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', // or postgres, mssql, sqlite
    // define:{
    //     freezeTableName:true
    // }
});

// sequelize.sync({alter:true}); //force:true will drop the table if it already exists
// sequelize.drop({ match:/_test$/}); //drop the table

//method 1: then()  callback
sequelize.authenticate().then(()=>{
    console.log('Done: Connection has been established successfully.'); 
}).catch((error)=>{
    console.error('Fail: Unable to connect to the database:', error);
});
const User = sequelize.define('user', {
    user_id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    
    },
    password:{
        type:Sequelize.DataTypes.STRING,
    },
    age:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:18
    },
    wittCodeRocks:{
        type:Sequelize.DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    freezeTableName:true,
    timestamps:false   // it reomves the timestamp columns
});

// console.log(sequelize.models.user);

// model syncrinization
User.sync({alter:true}).then((data)=>{   //force/alter
    console.log('Tayari : User table and User Model synced Successfull');
}).catch((error)=>{
    console.log('Tatizo: User table and User Model not synced');
});
