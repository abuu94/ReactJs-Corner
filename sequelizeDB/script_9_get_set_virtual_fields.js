const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
//npm install bcrypt
const bcrypt = require('bcrypt');
//npm install zlib
const zlib = require('zlib');
const { type } = require('os');


const sequelize = new Sequelize('sequelizedb', 'root', 'toor',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', 
  
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
                msg:'Please enter a username with at least 2 but not more than 4 characters'
        }
    
        },  // custom getter that converts the text to uppercase
        get(){
            const rawValue = this.getDataValue('username');
            return rawValue.toUpperCase();
        },
    },
    password:{
        type:DataTypes.STRING,
        set(value){
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(value,salt);
            this.setDataValue('password',hash);
        }
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue:18
    },
    wittCodeRocks:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },description:{
        type:DataTypes.STRING,
        // set and get methods uses sync functions
        set(value){
            const compressed = zlib.deflateSync(value).toString('base64');
            this.setDataValue('description',compressed);

        },
        get(){
            const value = this.getDataValue('description');
            const uncompressed =zlib.inflateSync(Buffer.from(value,'base64'));
            return uncompressed.toString();

        }
    },aboutUser:{
        type:DataTypes.VIRTUAL,
        get(){
            // return `${this.getDataValue('username')} is ${this.getDataValue('age')} years old`;
            return `${this.username}  ${this.description} `;
        }
    }
},{
    freezeTableName:true,
    timestamps:false   // it reomves the timestamp columns
});

User.sync({alter:true}).then(()=>{
        // return User.create({
        //     username:'wire',
        //     password:'wire123',
        //     description:'This is a description it could be long or short'
        // });

        return User.findOne({ where: { username: 'wire' } });

    }).then((data)=>{
    //    console.log(data.username);
    //    console.log(data.password);
    //    console.log(data.description);

    console.log(data.aboutUser);
    
       
}).catch((error)=>{
 console.log(error);
 
});
