const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
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

        // return User.sum('age',{where:{age:20}});
        // const wittcode = {soccer:'yes'}
        // wittcode.toJSON();
        
        // return User.findAll({raw:true});

        // return User.findAll({
        //     where:{age:20},
        //     raw:true
        // });

        // return User.findByPk(2);

        // return User.findOne();

        // return User.findOne({ where:{
        //     age:{
        //         [Op.or]:{
        //             [Op.lt]:25,
        //             [Op.eq]:null

        //         }
        //     }
        // }}); 

        // return User.findOrCreate({ where:{username:'Kake'}}); 

        // return User.findOrCreate({ 
        //     where:{username:'Bade'},
        // defaults:{
        //     password:'1234',
        //     age:20
        // }}); 

        return User.findAndCountAll({ 
            where:{username:'Bade'},
            raw:true
    })
    }).then((data)=>{
        // console.log(data);

        // const [result,created] =data;
        // console.log(created);

        const {count,rows} =data;
        console.log(count);
        console.log(rows);
}).catch((error)=>{
 console.log(error);
 
});
