const Sequelize = require('Sequelize');

const sequelize = new Sequelize({
  database: 'royals',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
});

const Kings = sequelize.define('kings', {
  name: Sequelize.STRING
});

const Queens = sequelize.define('queens', {
  name: Sequelize.STRING
});

module.exports = {
  sequelize,
  Kings,
  Queens
};
