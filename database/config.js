const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        
        console.log('DDBB online');
    } catch (error) {
       console.log(error);
       throw new Error('Error al conectar con DDBB'); 
    }

}

module.exports = {
    dbConnection
}