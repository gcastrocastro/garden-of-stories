const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection; 

db.on('connected', function() {
    console.log(`connected to mongo db ${db.name} on ${db.host} port: ${db.port}`)
})