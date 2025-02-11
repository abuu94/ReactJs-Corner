const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
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
const Student = sequelize.define('student', {
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'Please enter your name'
            },
            notEmpty:{
                msg:'Name cannot be empty'
            },
            len:{
                args:[4,20],
                msg:'Please enter a name with at least 4 but not more than 20 characters'
        }
    
        }
    },
    favorite_class:{
        type:DataTypes.STRING,
        defaultValue:'Computer Science'
    },
    school_year:{
        type:DataTypes.INTEGER,
        allowNull:false,
        
    },
    subscribe_to_wittcode:{
        type:DataTypes.TINYINT,
        defaultValue:true
    }
},{
    freezeTableName:true,
    timestamps:false   // it reomves the timestamp columns
});


Student.sync({alter:true}).then((data)=>{
//    return Student.findAll({ attributes:['name'],where:{
//             [Op.or]:{favorite_class:'Computer Science',subscribe_to_wittcode:true}    
//         }});  
 return Student.findAll({
            attributes:[
                'school_year',
                [sequelize.fn('COUNT',sequelize.col('school_year')),'num_students']],
            group:['school_year']}); // groupby
    }).then((data)=>{
        data.forEach((element)=>{
            console.log(element.toJSON());
        });
}).catch((error)=>{
 console.log('Tatio: Kuna kitu hakijakaa sawa', error);
});
