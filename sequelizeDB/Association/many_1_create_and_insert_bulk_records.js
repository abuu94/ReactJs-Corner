const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
const bcrypt = require('bcrypt');
const zlib = require('zlib');
const { type } = require('os');
const { timeStamp, error } = require('console');
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

const User = sequelize.define('user',{
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});

const Post = sequelize.define('post',{
    message:{
        type:DataTypes.STRING
    }

},{
    timestamps:false
});

User.hasMany(Post);
Post.belongsTo(User);

sequelize.sync({alter:true}).then(()=>{

    User.bulkCreate([
        { username:'abuu',password:'abuu123'},
        { username:'issa',password:'issa123'},
        { username:'adam',password:'adam123'}
    ]);

    Post.bulkCreate([
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'},
        {message:'This was an amazing post that i made online'}
    ]);

}).catch(()=>{
    console.log(error);
    
});
