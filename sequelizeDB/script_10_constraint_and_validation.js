/*
Custome validation function
Regex function
Seqquelize built in validators email, url ,ipaddress etc

*/

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
        // get(){
        //     const rawValue = this.getDataValue('username');
        //     return rawValue.toUpperCase();
        // },
    },
    password:{
        type:DataTypes.STRING,
        // set(value){
        //     const salt = bcrypt.genSaltSync(12);
        //     const hash = bcrypt.hashSync(value,salt);
        //     this.setDataValue('password',hash);
        // }
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue:18,
        validate:{
            // isOldEnough(value){
            //     if (value < 18){
            //         throw new Error("Too young!");

            //     }
            // }

            isNumeric:{
                msg:"You must enter a number for age!"
            }

            // isNumeric: true

        }
    },
    wittCodeRocks:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },description:{
        type:DataTypes.STRING,
        // set and get methods uses sync functions
        // set(value){
        //     const compressed = zlib.deflateSync(value).toString('base64');
        //     this.setDataValue('description',compressed);

        // },
        // get(){
        //     const value = this.getDataValue('description');
        //     const uncompressed =zlib.inflateSync(Buffer.from(value,'base64'));
        //     return uncompressed.toString();

        // }
    },aboutUser:{
        type:DataTypes.VIRTUAL,
        get(){
            // return `${this.getDataValue('username')} is ${this.getDataValue('age')} years old`;
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
        // validate:{
        //     // isEmail:true
        //     isIn:['me@example.org','me@example.com']
        // }
        // validate:{
        //     isIn:{
        //         args:[],
        //         msg:'The provided email must be one of the following ...'
        //     }
        // }
    }

},{
    freezeTableName:true,
    timestamps:false,   // it reomves the timestamp columns
    validate:{
        usernamePassMatch(){
            if (this.username === this.password){
                throw new Error("Password cannot be you username!");
            }else{
                console.log('Soccer');
            }

        }
    }
});

User.sync({alter:true}).then(()=>{
       
        // return User.create({ 
        //     username:'Mkli',
        //     password:'Mkali123',
        //     // description:'Mkali is a software developer',
        //     email:'mkali.com'

        //  });

        // const user = User.build({email:'tom'});
        // return user.validate(); // built in but you can use custom one

        return User.create({
            username:'mike',
            password:'mike2',
            age:90,
            // email: 'me@example.org'// ok
            // email: 'me@exampleErr.org'// not ok
          
        });

    }).then((data)=>{
   
    console.log(data.toJSON());
    
       
}).catch((error)=>{
 console.log(error);
 
});
