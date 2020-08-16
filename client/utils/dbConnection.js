import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect('mongodb+srv://marcin100:marcinmarcin100@afi-app.rcqkw.mongodb.net/Afi-app?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    connection.isConnected = db.connections[0].readyState;

//   const connection = mongoose.connection;
//   connection.once('open', () => {
//     console.log('MongoDB database connection established successfully');
//   });
}

export default dbConnect;
