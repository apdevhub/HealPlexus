import moongose from 'mongoose';

const connectDB = async () => {
    moongose.connection.on('connected', () => console.log("Database connected."));
    
    await moongose.connect(`${process.env.MONGODB_URI}/prescripto`);
}

export default connectDB;