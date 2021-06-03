const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('omini', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

const Ongs = sequelize.define('ongs', {
    id: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    whatsapp: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    uf: {
        type: Sequelize.STRING
    }

})

Ongs.sync({force: true});