const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
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
        // return User.findAll();  // select * from users  
        // return User.findAll({attributes:['username','password']});  // select username,password from users  
        // return User.findAll({attributes:[['username','jinalangu'],['password','passwordyangu']]});  // select username,password from users  with alias
        // return User.findAll({attributes:[[sequelize.fn('SUM',sequelize.col('age')),'howOld']]});  // calculate SUM
        // return User.findAll({attributes:[[sequelize.fn('AVG',sequelize.col('age')),'howAVG']]});  // calculate AVG
        // return User.findAll({attributes:{exclude:['password']}});  // prevent a col to be selected
        // return User.findAll({where:{age:18}});  // select * from users where age=18
        // return User.findAll({attributes:['username'],where:{age:18}});  // select username from users where age=18
        // return User.findAll({where:{age:18,username:'adam'}});  // select * from users where age=18 and username='adam'
        // return User.findAll({limit:2});  // select 2 users
        // return User.findAll({order:[['age','DESC']]});  // select order by user_id desc
        // return User.findAll({
        //     attributes:[
        //         'username',
        //         [sequelize.fn('SUM',sequelize.col('age')),'sum_age']],
        //     group:['username']}); // groupby

        // return User.findAll({ where:{
        //     username:'adam',
        //     age:18
        //     // [Op.or]:{username:'adam',age:18}
        //     // [Op.and]:{username:'adam',age:18}
        // }});  // Or Operator
        // return User.findAll({ where:{
        //     age:{
        //         [Op.gt]:25
        //     }
        // }});
        // return User.findAll({ where:{
        //     age:{
        //         [Op.or]:{
        //             [Op.lt]:40,
        //             [Op.eq]:null
        //         }
        //     }
        // }});
        return User.findAll({ where:
            sequelize.where(sequelize.fn('char_length',sequelize.col('username')),6)
            // check length of username to be 6 
        });

    }).then((data)=>{
    data.forEach((element)=>{
    console.log(element.toJSON());

    });

}).catch((error)=>{
 console.log(error);
 
});
