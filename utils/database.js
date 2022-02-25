const { Sequelize } = require( 'sequelize');

const sequelize = new Sequelize('everydb', 'root', '88087988', {
    dialect: 'mysql',
    host: 'localhost', 
});

module.exports = sequelize;