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
    /* Njia ya Kwanza: build() method
    //work with updted table: add data
    const user = User.build({username:'hassan',password:'123',age:25,wittCodeRocks:true});
    // You can have control structure here that can modify the data before saving
    user.username = 'abubakar';
    return user.save(); // save the data to the database
    */
    // Njia ya Pili: create() method
    return User.create({
        username:'adam',
        password:'789',
        age:15,
        wittCodeRocks:false
    });
    
}).then((data)=>{
    // console.log(data.toJSON());
    // console.log("Imeenda : User data saved successfully");
    console.log("Imeenda : User data saved successfully");
    data.username='moza';
    data.age=45;
    return data.save({fields:['age']});   
}).then((data)=>{
    console.log("Update : User data Update");
    console.log(data.toJSON());
    
    // return User.findAll();
}).catch((error)=>{
 console.log(error);
 
});
// console.log(sequelize.models.user);

// model syncrinization
// User.sync({alter:true}).then((data)=>{   //force/alter
//     console.log('Tayari : User table and User Model synced Successfull');
// }).catch((error)=>{
//     console.log('Tatizo: User table and User Model not synced');
// });
