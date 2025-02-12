const { raw } = require('mysql2');
const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;
const bcrypt = require('bcrypt');
const zlib = require('zlib');
const sequelize = new Sequelize('sequelizedb', 'root', 'toor', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Done: Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Fail: Unable to connect to the database:', error);
    });

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter your username',
            },
            notEmpty: {
                msg: 'Username cannot be empty',
            },
            len: {
                args: [2, 4],
                msg: 'Please enter a username with at least 2 but not more than 4 characters',
            },
        },
    },
    password: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        validate: {
            isNumeric: {
                msg: 'You must enter a number for age!',
            },
        },
    },
    wittCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    description: {
        type: DataTypes.STRING,
    },
    aboutUser: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.username} ${this.description}`;
        },
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
            myEmailValidator(value) {
                if (value === null) {
                    throw new Error('Please enter an email!');
                }
            },
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    }
}, {
    freezeTableName: true,
    timestamps: true,
    // createdAt: {
    //     type: DataTypes.DATE,
    //     defaultValue: Sequelize.NOW,
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     defaultValue: Sequelize.NOW,
    // },
    validate: {
        usernamePassMatch() {
            if (this.username === this.password) {
                throw new Error('Password cannot be your username!');
            } else {
                console.log('Soccer');
            }
        },
    },
    paranoid: true,
    deletedAt: 'timeDestroyed',
});

function myInfo() {
    console.log('RUNNING SQL STATEMENT');
}

User.sync({ alter: true }).then(() => {
    return User.destroy({
        where: { user_id: 4 },
        force: true,
    });
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
