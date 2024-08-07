import mongoose from 'mongoose';

const DBConnetion = async () => {
    try {
      await mongoose.connect( 'mongodb://localhost:27017', { useNewUrlParser: true });
      console.log('Database connected successfully ');
    } catch (error) {
        console.error('Error while connecting with the database', error.message)
    }
}

export default DBConnetion;
