import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-vh8rnrg-shard-00-00.x018hby.mongodb.net:27017,ac-vh8rnrg-shard-00-01.x018hby.mongodb.net:27017,ac-vh8rnrg-shard-00-02.x018hby.mongodb.net:27017/?ssl=true&replicaSet=atlas-4ut11e-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;