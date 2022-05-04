const { app } = require('./app');

const { User } = require('./models/user.model');
const { Repair } = require('./models/repair.model');

const { db } = require('./utils/database');

// Authenticate database credentials
db.authenticate()
.then( (  ) => console.log('Database authenticated') )
.catch( error => console.log( error ) );

// Syncing sequelize models
db.sync()
.then( (  ) => console.log('Database synced') )
.catch( error => console.log( error ) );

// One to many relation
User.hasMany(Repair);
Repair.belongsTo(User);

// Spin up server
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 4000;

app.listen( PORT, (  ) => {
    console.log( `Express app running on PORT: ${ PORT }` );
} );