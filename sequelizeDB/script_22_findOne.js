const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
//npm install bcrypt
const bcrypt = require('bcrypt');
//npm install zlib
const zlib = require('zlib');
const { type } = require('os');
const sequelize = new Sequelize('sequelizedb', 'root', 'Mkubwa*94',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', 
});
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
                msg:'Please enter a username with at least 2 but not more than 4 characters'
        }
        },  // custom getter that converts the text to uppercase
    },
    password:{
        type:DataTypes.STRING,
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue:18,
        validate:{
            isNumeric:{
                msg:"You must enter a number for age!"
            }
        }
    },
    wittCodeRocks:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },description:{
        type:DataTypes.STRING,
       
    },aboutUser:{
        type:DataTypes.VIRTUAL,
        get(){
      
            return `${this.username}  ${this.description} `;
        }
    },email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:true,
        validate:{
            myEmailValidator(value){
                if (value===null){
                    throw new Error("Please enter an email!")
                }
            }
        }
    }, createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        }
},{
    freezeTableName:true,
    timestamps:true,   // it reomves the timestamp columns
    validate:{
        usernamePassMatch(){
            if (this.username === this.password){
                throw new Error("Password cannot be you username!");
            }else{
                console.log('Soccer');
            }
        }
    },
    paranoid:true, // it store soft deleted records
    deletedAt:'timeDestroyed'
});

function myInfo(){
    console.log("RUNNING SQL STATEMENT")
}
User.sync({alter:true}).then(()=>{
    return User.findOne({paranoid:false}); // true consider paranoid but false ignore paranoid
        
   
}).then((data)=>{
    console.log(data.toJSON());
    
})
.catch((error)=>{
 console.log(error);
});
