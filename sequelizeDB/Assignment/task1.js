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
        type:DataTypes.STRING(25),
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
    //    console.log("Tayari Umefanikiwa kutengenea Student Table");
    return Student.bulkCreate([
        {name:'Abubakar Yussuf',favorite_class:'Software Engineering', school_year:5,subscribe_to_wittcode:true},
        {name:'Fauz Abbass',favorite_class:'Data Science', school_year:4,subscribe_to_wittcode:false},
        {name:'Mahir Khator', school_year:3},
        {name:'Asha Rajab', school_year:2},
        {name:'Hashim Thabiti', school_year:1}
    ],{validate:true});

    }).then((data)=>{
        // console.log(data);
        data.forEach((element)=>{
            // console.log(`Student ID: ${element.student_id} Name: ${element.name} Favorite Class: ${element.favorite_class} School Year: ${element.school_year} Subscribe to WittCode: ${element.subscribe_to_wittcode}`);
            console.log(element.toJSON());
        });
}).catch((error)=>{
 console.log('Tatio: Kuna kitu hakijakaa sawa', error);
});
