import mongoose from 'mongoose';

const DBConnection = async () => {
    const mongoUri = process.env.MONGO_URI; 

    if (!mongoUri) {
        console.error('MONGO_URI environment variable not set');
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;
