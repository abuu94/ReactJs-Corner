const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const {DataTypes,Op}=Sequelize;
const bcrypt = require('bcrypt');
const zlib = require('zlib');
const { type } = require('os');
const { timeStamp, error, time } = require('console');
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

const Customer = sequelize.define('customer',{
    customerName:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});

const Product = sequelize.define('product',{
    productName:{
        type:DataTypes.STRING

    }
},{
    timestamps:false
});

const CustomerProduct = sequelize.define('customerproduct',{
    customerproductId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
},{
    timestamps:false
});

// customerproduct is ajunction table
Customer.belongsToMany(Product,{
    through:CustomerProduct
});
Product.belongsToMany(Customer,{
    through:CustomerProduct

    });

sequelize.sync({alter:true}).then(()=>{
    console.log('Insert records created successfully');
    Customer.bulkCreate([
        {customerName: 'abuu'},
        {customerName: 'salum'},
        {customerName: 'maimuna'},
        {customerName: 'saumu'},
        {customerName: 'asha'},
        {customerName: 'juma'},
    ]);
    Product.bulkCreate([
        {productName: 'gari'},
        {productName: 'hoda'},
        {productName: 'ndege'},
        {productName: 'pumba'},
        {productName: 'farasi'},
        {productName: 'nyumba'},
        {productName: 'maembe'},
        {productName: 'karafuu'},

    ]);

}).then((err)=>{
    console.log(err);
    
});
