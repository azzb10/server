import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('everydb', 'root', '88087988', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;